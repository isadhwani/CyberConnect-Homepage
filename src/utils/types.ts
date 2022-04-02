export interface FollowListInfoArgs {
  address: string;
  namespace?: string;
  network?: string;
  followingFirst?: number;
  followingAfter?: string;
  followerFirst?: number;
  followerAfter?: string;
}

export interface SearchUserInfoArgs {
  fromAddr: string;
  toAddr: string;
  network?: string;
}

export interface BasicUserInfo {
  domain: string;
  address: string;
  avatar: string;
}

export interface FollowListInfo {
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
  list: BasicUserInfo[];
}

export interface FollowListInfoResp {
  followingCount: number;
  followerCount: number;
  followings: FollowListInfo;
  followers: FollowListInfo;
}

export interface SearchUserInfoResp {
  connections: {
    followStatus: {
      isFollowing: boolean;
      isFollowed: boolean;
    };
  }[];
  identity: {
    domain: string;
    address: string;
    avatar: string;
  };
}

export enum Network {
  ETH = "ETH",
  SOLANA = "SOLANA",
}
