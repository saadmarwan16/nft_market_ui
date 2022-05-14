export interface ITopCategory {
  rank: string;
  src: string;
  alt: string;
  name: string;
  username: string;
  isFollowing: boolean;
}

export interface ITopCollection {
  ownerSrc: string;
  ownerAlt: string;
  ownerName: string;
  username: string;
  collectionSrc: string;
  collectionAlt: string;
  collectionName: string;
  collectionNumber: string;
  currentBid: string;
  endingIn: string;
}

export interface INotification {
  src: string;
  alt: string;
  collectionName: string;
  priceSold: string;
}
