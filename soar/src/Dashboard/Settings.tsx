import Tabs from "../components/Tabs/Tabs";
import EditPreferences from "./EditPreferences";
import EditProfile from "./EditProfile";
import EditSecurity from "./EditSecurity";

const Settings = () => {
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const content = [<EditProfile />, <EditPreferences />, <EditSecurity />];

  return <Tabs tabs={tabs} content={content} />;
};

export default Settings;
