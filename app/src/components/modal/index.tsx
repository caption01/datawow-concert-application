export function Modal({ show = false }) {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        show && "bg-slate-500/50"
      }`}
    >
      <div
        className={`relative p-4 w-full max-w-md max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex flex-col gap-4 items-center p-4">
            <span className="w-[50px] bg-red-500 p-4 rounded-full">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M11.5444 9.00002L17.4724 3.07202C17.7903 2.7308 17.9634 2.27949 17.9552 1.81317C17.947 1.34685 17.7581 0.901923 17.4283 0.572132C17.0985 0.242341 16.6535 0.05343 16.1872 0.0452023C15.7209 0.0369746 15.2696 0.210072 14.9284 0.528024L9.00037 6.45602L3.07237 0.528024C2.73115 0.210072 2.27984 0.0369746 1.81352 0.0452023C1.34719 0.05343 0.902269 0.242341 0.572478 0.572132C0.242686 0.901923 0.053776 1.34685 0.0455482 1.81317C0.0373205 2.27949 0.210418 2.7308 0.52837 3.07202L6.45637 9.00002L0.52837 14.928C0.191289 15.2655 0.00195312 15.723 0.00195313 16.2C0.00195312 16.677 0.191289 17.1345 0.52837 17.472C0.865871 17.8091 1.32337 17.9984 1.80037 17.9984C2.27737 17.9984 2.73487 17.8091 3.07237 17.472L9.00037 11.544L14.9284 17.472C15.2659 17.8091 15.7234 17.9984 16.2004 17.9984C16.6774 17.9984 17.1349 17.8091 17.4724 17.472C17.8094 17.1345 17.9988 16.677 17.9988 16.2C17.9988 15.723 17.8094 15.2655 17.4724 14.928L11.5444 9.00002Z"
                  fill="white"
                />
              </svg>
            </span>
            <h3 className="mb-5 text-lg font-bold w-3/4">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex w-full justify-around">
              <button
                type="button"
                className="bg-white border-2 border-gray-200 font-medium rounded-lg text-sm w-[150px] p-2"
              >
                Cancel
              </button>
              <button
                type="button"
                className="text-white bg-red-600 font-medium rounded-lg text-sm w-[150px] p-2"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
