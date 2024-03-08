interface ScrollCarouselProps {
  data: Array<{
    index: number;
    img: string;
  }>;
}

const Scroll_Carousel = (props: ScrollCarouselProps) => {
  const { data } = props;
  return (
    <div className="scroll-container">
      <div
        className={
          "flex w-full flex-row text-center justify-center gap-10 rounded-sm overflow-hidden scroll-content"
        }
      >
        {data.map((img) => (
          <img
            key={img.index}
            src={img.img}
            alt={`company-${img.index}`}
            loading="lazy"
            className={"w-32 object-contain aspect-video"}
          />
        ))}
      </div>
    </div>
  );
};

export default Scroll_Carousel;
