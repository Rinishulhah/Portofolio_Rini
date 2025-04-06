import { useState } from "react";

const Tabs = () => {
  // tracks the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // handles change to active/nonactive tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => handleTabChange("tab1")}
          className={`px-2 mr-4 lg:text-xl texl-l font-semibold uppercase tracking-wider  ${
            activeTab === "tab1"
              ? "border-b-2 border-violet-600 "
              : " border-none"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => handleTabChange("tab2")}
          className={`px-2 lg:text-xl text-l font-semibold uppercase tracking-wider ${
            activeTab === "tab2"
              ? "border-b-2 border-violet-600"
              : " border-none"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab content */}
      <div className="px-2">
        {activeTab === "tab1" && (
          <div>
            <h3 className="text-blue-600 font-medium text-lg">
              Asisten Laboratorium, Universitas Islam Negeri Syarif Hidayatullah
            </h3>
            <ul className="text-xs ml-4 mb-2">
              <li>
                Conduct research and collect data, Analyze all data that has
                been collected, Record and report laboratory equipment that is
                used, lost or damaged, Checking the completeness of laboratory
                equipment before use and ensuring that the equipment does not
                experience problems or technical problems, not experiencing
                problems or technical glitches, Ensure the accuracy of
                laboratory data and results, Cooperate with members involved in
                the laboratory. Assist in the implementation of practical exams
              </li>
            </ul>
            <h3 className="text-blue-600 font-medium text-lg">Admin JNE</h3>
            <ul className="text-xs ml-4 mb-2">
              <li>
                Entering package data into the system, Checking and printing
                delivery receipts, Ensure that the recipient and sender data is
                correct, Serving customer inquiries related to package delivery,
                Assisting customers with package tracking, Resolve complaints or
                delivery problems, Organize and record packages that will be
                sent by couriers, Ensure packages are given to couriers on
                schedule.
              </li>
            </ul>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <h3 className="text-blue-600 font-medium text-lg">
              Universitas Islam Negeri Syarif Hidayatullah Jakarta
            </h3>
            <ul className="ml-4 mb-2">
              <li className="text-md">Bachelor of Physics Education</li>
              <li className="ml-4 text-sm">
                Laboratory Assistant of Physics Education In Universitas Islam
                Negeri Syarif Hidayatullah Jakarta
              </li>
            </ul>

            <h3 className="text-blue-600 font-medium text-lg">
              Universitas Cakrawala
            </h3>
            <ul className="ml-4 mb-2">
              <li className="text-md">Bachelor of Data Science</li>
              <li className="ml-4 text-sm">
                Create and build a project in the field of data science, and
                maintain data from a source.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
