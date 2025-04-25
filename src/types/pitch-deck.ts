
export interface SlideInfo {
  id: number;
  title: string;
  parentTopic: string;
  imagePath: string;
}

export interface TopicStructure {
  title: string;
  slides: Array<{
    id: number;
    title: string;
    imagePath: string;
  }>;
}

export interface SlideStructure {
  topics: TopicStructure[];
}
