import React from "react";

const CourseCard: React.FC = () => {
  return (
    <a href="/lms/courses/frappe-developer-certification" className="">
      <div
        className="flex flex-col h-full rounded-md shadow-md text-base overflow-auto"
        style={{ minHeight: "350px" }}
      >
        {/* Course Image */}
        <div
          className="course-image"
          style={{
            backgroundImage: `url('/files/ct-new-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tags */}
          <div className="flex items-center flex-wrap space-y-1 space-x-1 relative top-4 px-2 w-fit">
            <div className="inline-flex select-none items-center gap-1 rounded-full text-green-800 bg-green-200 h-5 text-xs px-1.5">
              Featured
            </div>
            <div className="inline-flex select-none items-center gap-1 rounded-full text-gray-700 bg-white border border-gray-300 h-5 text-xs px-1.5">
              Web Development
            </div>
            <div className="inline-flex select-none items-center gap-1 rounded-full text-gray-700 bg-white border border-gray-300 h-5 text-xs px-1.5">
              Python
            </div>
            <div className="inline-flex select-none items-center gap-1 rounded-full text-gray-700 bg-white border border-gray-300 h-5 text-xs px-1.5">
              Low Code
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="flex flex-col flex-auto p-4">
          {/* Stats */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="flex items-center" data-state="closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open-icon h-4 w-4 stroke-1.5 text-gray-700 mr-1"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                14
              </span>
            </div>
            <div>
              <span className="flex items-center" data-state="closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users-icon h-4 w-4 stroke-1.5 text-gray-700 mr-1"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                3301
              </span>
            </div>
            <div>
              <span className="flex items-center" data-state="closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star-icon h-4 w-4 stroke-1.5 text-gray-700 mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                4.92
              </span>
            </div>
          </div>

          {/* Course Title */}
          <div className="text-xl font-semibold leading-6">
            Full-stack App Development with Frappe Framework
          </div>

          {/* Short Introduction */}
          <div className="short-introduction text-gray-700 text-sm">
            Learn to build full-stack Frappe apps with Python & JavaScript
          </div>

          {/* Instructor Info */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex avatar-group overlap">
              <div className="h-6 mr-1">
                <div className="relative inline-block shrink-0 w-6 h-6 rounded-full avatar border border-gray-300 cursor-auto">
                  <img
                    src="/files/same-without.png"
                    alt="Mohammad Hussain Nagaria"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
              </div>
              <span>
                <a href="/lms/user/buildwithhussain" className="">
                  Mohammad Hussain Nagaria
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
