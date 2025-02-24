import type {
  ApplicationCommandData,
  AutocompleteInteraction,
  BaseInteraction,
  ButtonInteraction,
  Client,
  ModalSubmitInteraction,
  StringSelectMenuInteraction,
} from "discord.js";

import type { Model } from "sequelize";

export interface IEvent {
  event: string;
  execute: (client: Client, ...args: unknown[]) => Promise<void>;
  once?: boolean;
}

export interface ICommand {
  data: ApplicationCommandData;
  execute: (client: Client, interaction: BaseInteraction) => Promise<void>;
  autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
  buttonExecute?: (
    client: Client,
    interaction: ButtonInteraction,
  ) => Promise<void>;
  modalExecute?: (
    client: Client,
    interaction: ModalSubmitInteraction,
  ) => Promise<void>;
  selectMenuExecute?: (
    client: Client,
    interaction: StringSelectMenuInteraction,
  ) => Promise<void>;
}

//Nation
export interface Nation {
  $: {
    id: string;
  };
  NAME: string;
  FULLNAME: string;
  MOTTO: string;
  FREEDOM: {
    CIVILRIGHTS: string;
    ECONOMY: string;
    POLITICALFREEDOM: string;
  };
  REGION: string;
  POPULATION: string;
  TAX: string;
  ANIMAL?: string;
  CURRENCY: string;
  DEMONYM: string;
  DEMONYM2: string;
  DEMONYM2PLURAL: string;
  FLAG: string;
  BANNER?: string;
  MAJORINDUSTRY: string;
  GOVT: {
    ADMINISTRATION: string;
    DEFENCE: string;
    EDUCATION: string;
    ENVIRONMENT: string;
    HEALTHCARE: string;
    COMMERCE: string;
    INTERNATIONALAID: string;
    LAWANDORDER: string;
    PUBLICTRANSPORT: string;
    SOCIALEQUALITY: string;
    SPIRITUALITY: string;
    WELFARE: string;
  };
  SECTORS: {
    BLACKMARKET: string;
    GOVERNMENT: string;
    INDUSTRY: string;
    PUBLIC: string;
  };
  INDUSTRYDESC: string;
  FOUNDEDTIME: string;
  INFLUENCE: string;
  LEADER: string;
  CAPITAL: string;
  RELIGION: string;
  POLICIES?: {
    POLICY: Policy[];
  };
  CENSUS: {
    SCALE: Scale[];
  };
  FACTBOOKLIST?: {
    FACTBOOK: Factbook[];
  };
}

interface Policy {
  NAME: string;
  PIC: string;
  CAT: string;
  DESC: string;
}

interface Scale {
  $: {
    id: string;
  };
  SCORE: number;
  RANK: string;
  RRANK: string;
}

interface Factbook {
  $: {
    id: string;
  };
  TITLE: string;
  AUTHOR: string;
  CATEGORY: string;
  SUBCATEGORY: string;
  CREATED: string;
  EDITED: string;
  VIEWS: string;
  SCORE: string;
}

//Region
export interface Region {
  $: {
    id: string;
  };
  NAME: string;
  NUMNATIONS: string;
  NATIONS: string;
  UNNATIONS: string;
  EMBASSIES: {
    EMBASSY: string;
  };
  DELEGATE: string;
  OFFICERS: {
    OFFICER: Officer[];
  };
  GOVERNOR: string;
  FOUNDEDTIME: string;
  POWER: string;
  FLAG: string;
  BANNERURL: string;
}

interface Officer {
  NATION: string;
  OFFICE: string;
  TIME: string;
  BY: string;
  ORDER: string;
}

export type VerifyData = {
  result: string;
};

export interface SSEEvent {
  id: string;
  time: string;
  str: string;
}

export interface RMB {
  REGION: {
    $: {
      id: string;
    };
    MESSAGES: {
      POST: RMBMessage[];
    };
  };
}

export interface RMBMessage {
  $: {
    id: string;
  };
  TIMESTAMP: string;
  NATION: string;
  STATUS: string;
  LIKES: string;
  LIKERS: string;
  MESSAGE: string;
}

export interface Profile {
  userId: string;
  guildId: string;
  handle: string;
  bio?: string;
  profilePicture?: string;
  bannerPicture?: string;
  location?: string;
  followers: string[];
  following: string[];
}

export interface PostInstance extends Model<Post>, Post {}
export interface Post {
  profileId: string;
  content: string;
  timestamp: string;
}

export interface RegionInstance extends Model<RegionModel>, RegionModel {}
export interface RegionModel {
  guildId: string;
  regionName: string;
  rmbChannelId: string;
  activityChannelId: string;
  dispatchChannelId: string;
  tweetChannelId: string;
  dateChannelId: string;
}
