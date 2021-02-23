import React from "react";
import {
  SiOpenvpn,
  SiJira,
  SiGithub,
  SiAtlassian,
  SiMicrosoftoutlook,
  SiSlack,
  SiPostman,
  SiJenkins,
  SiSkype,
  SiMicrosoft,
  SiDocker,
  SiGmail,
} from "react-icons/si";
import { FiDatabase, FiCloudRain, FiMonitor } from "react-icons/fi";
import { VscSourceControl } from "react-icons/vsc";
import { ImOffice } from "react-icons/im";
import { FaBug, FaAws } from "react-icons/fa";
import { BsClipboard, BsCreditCard } from "react-icons/bs";
import { BiSpreadsheet, BiPlusMedical } from "react-icons/bi";

const IconFactory = (props) => {
  switch (props.iconName) {
    case "vpn":
      return <SiOpenvpn />;
    case "db":
      return <FiDatabase />;
    case "jira":
      return <SiJira />;
    case "github":
      return <SiGithub />;
    case "atlassian":
      return <SiAtlassian />;
    case "outlook":
      return <SiMicrosoftoutlook />;
    case "svn":
      return <VscSourceControl />;
    case "slack":
      return <SiSlack />;
    case "postman":
      return <SiPostman />;
    case "jenkins":
      return <SiJenkins />;
    case "bug":
      return <FaBug />;
    case "cloudsky":
      return <FiCloudRain />;
    case "clipboard":
      return <BsClipboard />;
    case "skype":
      return <SiSkype />;
    case "aws":
      return <FaAws />;
    case "card":
      return <BsCreditCard />;
    case "office":
      return <ImOffice />;
    case "microsoft":
      return <SiMicrosoft />;
    case "sheet":
      return <BiSpreadsheet />;
    case "nagios":
      return <FiMonitor />;
    case "docker":
      return <SiDocker />;
    case "gmail":
      return <SiGmail />;
    case "medical":
      return <BiPlusMedical />;
    default:
      return null;
  }
};

export default IconFactory;
