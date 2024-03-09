export interface OrderListData {
  date: string;
  items: {
    image: string;
    title: string;
    subTitle: string;
    count: number;
    state: string;
    price: number;
  }[];
}

export interface InsuranceDataContent {
  [kind: string]: string[];
}

export interface insuranceData {
  isJoin: boolean;
  joinDate: string;
  updateDate: string;
  insuranceRate: number;
}

export interface GuestInsuranceData {
  benefit: {
    header: string;
    subHeader: string;
    benefitList: string[];
    contactNum: string;
    workingTime: string;
  };
  insuranceItem: {
    header: string;
    subHeader: string;
    dropDown: {
      header: string;
      content: InsuranceDataContent[];
    }[];
  }[];
}

export interface DronePartData {
  img: string;
  name: string;
  id: number;
  balanceScore: number;
  totalScore: number;
  dronePart: {
    kind: string;
    detail: string;
    price: number;
    num: number;
  }[];
}

export interface PartOnSaleData {
  [kind: string]: {
    img: string;
    detail: string;
    salePrice: number;
    wefloPrice: number;
    num: number;
    arrivalDate: string;
  };
}

export interface DronePartDetailData {
  img: string;
  name: string;
  id: number;
  orderDate: string;
  currentPart: {
    [kind: string]: {
      name: string;
      score: number;
    }[];
  }[];
  salePart: PartOnSaleData[];
}
