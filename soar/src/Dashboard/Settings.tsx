import Tabs from "../components/Tabs/Tabs";

const Settings = () => {
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const content = [
    "This is the content of Tab 1",
    "This is the content of Tab 2",
    "This is the content of Tab 3",
  ];
  return (
    <div className="w-full  bg-white p-6 rounded-3xl">
      <Tabs tabs={tabs} content={content}/>
    </div>
  );
};

export default Settings;
