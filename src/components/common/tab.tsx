export default function Tab() {
  return (
    <div className="flex items-center gap-x-2">
      <span className="bg-blue-100 text-blue-800  font-medium  px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
        All
      </span>
      <span className="bg-blue-100 text-blue-800  font-medium  px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
        Website
      </span>
      <span className="bg-blue-100 text-blue-800  font-medium  px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
        Application
      </span>
      <span className="bg-blue-100 text-blue-800  font-medium  px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
        Design
      </span>
    </div>
  );
}
