// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "OtterTech",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Jimmy Duong",
    description: "Cybersecurity Engineer"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/jimmyduong00",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/jimmyduong00/",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:j.duong00@outlook.com"
  },
 // {
//    icon: "mdi:rss",
//    friendlyName: "rss",
//    link: "/rss.xml"
 // }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: '/projects'
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Archive",
    path: '/archive'
  }
];
