interface SlugifyOptions {
  lower?: boolean;
  removeSpecialChars?: boolean;
  trimHyphens?: boolean;
  replaceSpacesWithHyphens?: boolean;
}

export class Slugify {
  /**
   * Generates a slug from a given string.
   * @param text The input text to slugify.
   * @param options Optional configuration for slugification.
   * @returns The generated slug.
   */
  static generate(text: string, options: SlugifyOptions = {}): string {
    const {
      lower = true,
      removeSpecialChars = true,
      trimHyphens = true,
      replaceSpacesWithHyphens = true,
    } = options;

    let slug = text;

    if (lower) {
      slug = slug.toLowerCase();
    }

    if (replaceSpacesWithHyphens) {
      slug = slug.replace(/[\s_]+/g, '-');
    }

    if (removeSpecialChars) {
      slug = slug.replace(/[^a-z0-9-]/g, '');
    }

    slug = slug.replace(/--+/g, '-');

    if (trimHyphens) {
      slug = slug.replace(/^-+|-+$/g, '');
    }

    return slug;
  }
}
