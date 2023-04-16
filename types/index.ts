export interface ILink {
    name: string;
    href: string;
    id?: number;
}

export interface IJudge {
    name: string;
    twitter: string;
    title: string;
    avatar: string;
}

export interface IFaq {
    question: string;
    answer: string;
}

export interface IPartner {
    logo?: string;
    image?: string;
    text: string;
    display: string;
    link: string;
}

export interface IWinner {
    name: string;
    twitter: string;
    github: string;
    email: string;
    avatar: string;
    projectName: string;
    projectLink: string;
    article: string;
    projectSource: string;
    position: string;
}

export interface IMention {
    name: string;
    twitter: string;
    github: string;
    email: string;
    avatar: string;
    projectName: string;
    projectLink: string;
    projectSource: string;
    article: string;
}

export interface IAbout {
    texts: string[];
    bullets: string[];
    footer: string;
    highlights: string[];
}

export interface IEvent {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    isCompleted: boolean;
    isCurrent: boolean;
}

export interface ITwitterSpace {
    id: number;
    link: string;
    guestSpeaker: string;
    title: string;
    date: string;
}

export interface IResultLink {
    name: string;
    link: string;
    target: string;
}

export interface IConfig {
    name: string;
    display: string;
    description?: string;
    keywords?: string;
    completed: boolean;
    links: ILink[];
    submissionurl: string;
    subtitle: string;
    about: IAbout;
    judges: IJudge[];
    faqs: IFaq[];
    cta: { title: string; description: string };
    partners: IPartner[];
    winners: IWinner[];
    mentions: IMention[];
    events: IEvent[];
    twitterSpaces: ITwitterSpace[];
    started?: boolean;
    result_links: IResultLink[];
}
