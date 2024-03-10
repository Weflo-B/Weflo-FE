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
  id: number;
  droneImg: string;
  nickname: string;
  balanceScore: number;
  totalScore: number;
  orderDate: string;
  estimateDate: string;
  productsInfo: {
    productImage: string;
    category: string;
    name: string;
    price: number;
    // salePrice: number;
    // totalPrice: number;
    amount: number;
  }[];
}

export interface PartOnSaleData {
  productImage: string;
  estimateDate: string;
  category: string;
  name: string;
  price: number;
  salePrice: number;
  totalPrice: number;
  amount: number;
}

interface Abnormality {
  category: string;
  partsScore: {
    name: string;
    score: number;
  }[];
}

export interface DronePartDetailData {
  id: number;
  droneImg: string;
  nickname: string;
  orderDate: string;
  productsInfo: PartOnSaleData[];
  abnormalities: Abnormality[];
}

export interface GetEstimateData {
  name: string;
  orderDate: string;
  productsInfo: {
    productImage: string;
    category: string;
    name: string;
    price: number;
    salePrice: number;
    totalPrice: number;
    amount: number;
  }[];
  sumPrice: number;
}
