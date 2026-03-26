export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
  previewImage?: string; 
};

export type ProjectDataType = {
  id: string;
  titleKey: string;      
  descKey: string;       
  techKeys: string[];    
  image: string;       
  imageAltKey: string;  
  liveUrl: string;      
  repoUrl?: string;  
}