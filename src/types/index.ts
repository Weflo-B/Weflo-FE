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

export interface InsuranceData {
  joinDate: string;
  nextDate: string;
  progress: {
    progressRate: number;
    previousDay: number;
    remainDays: number;
  };
  insuranceContent: {
    header: string;
    subHeader: string;
    labels: string[];
  };
  insuranceTerm: {
    header: string;
    subHeader: string;
    labels: string[];
  };
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
      content: string;
    }[];
  };
}

export interface DroneData {
  name: string;
  balanceScore: number;
  totalScore: number;
  dronePart: {
    kind: string;
    detail: string;
    price: number;
    num: number;
  }[];
}
