export interface SeoMeta {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
}

export interface PageSeoMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  components?: string[];
}

export interface AllPagesSeo {
  home: PageSeoMeta;
  about: PageSeoMeta;
  mission: PageSeoMeta;
  service: PageSeoMeta;
  gallery: PageSeoMeta;
  blog: PageSeoMeta;
  event: PageSeoMeta;
  contact: PageSeoMeta;
  faq: PageSeoMeta;
}

export interface HomeJsonData {
  meta: SeoMeta;
  pages: AllPagesSeo;
  site: SiteData;
  menu: MenuItem[];
  banner: HeroData[];
}

export interface ButtonItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | string;
  icon?: "heart" | "play";
}
export interface FeatureCard {
  icon: string;
  title: string;
  desc: string;
}

export interface HeroData {
  pretitle: string;
  title: string;
  desc: string;
  buttons: ButtonItem[];
  bgImageUrl: string;
  videoUrl:string;
}

export interface HeroSectionData {
  banner: HeroData[];
  featureCards?: FeatureCard[];
}

export interface BannerProps {
  data: HeroData;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface SocialLinkItem {
  label: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube";
  href: string;
}

export interface TopBarData {
  address: string;
  phone: string;
  phoneHref: string;
  socialLinks: SocialLinkItem[];
}

export interface LogoData {
  light: string;
}

export interface HeaderCTA {
  label: string;
  href: string;
}

export interface SiteData {
  siteName: string;
  tagline: string;
  logo: LogoData;
  TopBar: TopBarData;
  headerCta: HeaderCTA;
  copyright: string;
}

export interface HeaderProps {
  site: SiteData;
  menu: MenuItem[];
}

export interface FooterSocialLink {
  label: "facebook" | "twitter" | "youtube" | "instagram";
  href: string;
}

export interface QuickLinkItem {
  label: string;
  href: string;
}

export interface FooterContactItem {
  location: string;
  phone: string;
  phoneHref: string;
  email?: string;
}

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface FooterData {
  logoImage: string;
  desc: string;
  newsletterTitle?: string;
  newsletterDesc?: string;
  socialsLinks: FooterSocialLink[];
  links: QuickLinkItem[];
  footerContact: FooterContactItem[];
  copyright: string;
  legalLinks?: FooterLegalLink[];
}

export interface FooterProps {
  data: FooterData;
}

// ================= ABOUT PAGE =================
export interface FeatureItem {
  id: number;
  title: string;
  desc: string;
}

export interface AboutBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface ButtonItem {
  label: string;
  href: string;
}

export interface AboutSideImages {
  topLeft: string;
  mainLeft: string;
  bottomRight: string;
}

export interface AboutPageData {
  pretitle: string;
  title: string;
  desc: string;
  donationBadge: string;
  sideImages: AboutSideImages;
  features: FeatureItem[];
  checklist: string[];
  button: ButtonItem;
  phone: string;
  banner: AboutBanner;
}

export interface AboutPageProps {
  data: AboutPageData;
}

// ================= BLOG =================

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author?: string;
}

export interface BlogButton {
  label: string;
}

export interface Banner {
  bgImageUrl: string;
  breadcrumbCurrent: string;
  breadcrumbHome: string;
}

export interface BlogData {
  pretitle: string;
  title: string;
  desc: string;
  button: BlogButton;
  posts: BlogPost[];
  banner: Banner;
}

export interface BlogProps {
  data: BlogData;
}

// ================= CAUSES =================

export interface CauseItem {
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  href: string;
  label: string;
}

export interface CausesData {
  pretitle: string;
  title: string;
  desc: string;
  items: CauseItem[];
}

export interface CausesProps {
  data: CausesData;
}

export interface ContactBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface ContactHeading {
  pretitle: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactInfoItem {
  iconTitle: string;
  values?: string[];
  socialLinks?: SocialLink[];
}

export interface ContactFormLabels {
  title: string;
  subtitle: string;
  note: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
}

export interface ContactSuccessMessage {
  title: string;
}

export interface ContactMap {
  title: string;
  address: string;
  directionsText: string;
  directionsUrl: string;
  embedUrl: string;
}

export interface ContactSectionData {
  banner: ContactBanner;
  heading: ContactHeading;
  officeInfo: ContactInfoItem[];
  formLabels: ContactFormLabels;
  successMessage: ContactSuccessMessage;
  map: ContactMap;
}

export interface ContactSectionProps {
  data: ContactSectionData;
}

export interface FaqBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface FaqCategoryTab {
  id: string;
  title: string;
  icon?: string;
}

export interface FaqSidebarBanner {
  tagline: string;
  title: string;
  buttonText: string;
  buttonUrl: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroupSection {
  id: string;
  categoryTitle: string;
  colorScheme?: "orange" | "emerald" | "sky" | "purple" | string;
  items: FaqItem[];
}

export interface FaqData {
  banner: FaqBanner;
  sidebarCategories?: FaqCategoryTab[];
  sidebarBanner?: FaqSidebarBanner;
  faqSections: FaqGroupSection[];
}

export interface FaqProps {
  data: FaqData;
}

export interface FeaturedProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  goalAmount: number;
  raisedAmount: number;
  percent: number;
  description: string;
  slug: string;
}

export interface FeaturedProjectsData {
  sectionBadge: string;
  sectionTitle: string;
  sectionpretitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: FeaturedProjectItem[];
}

export interface FeaturedProjectsProps {
  data: FeaturedProjectsData;
}

// Gallery Section
export interface PageBanner {
  title: string;
  bgImageUrl: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  category?: string;
  videoUrl?: string; // Present for video items
}

export interface GallerySectionData {
  pretitle: string;
  title: string;
  desc: string;
  items: GalleryItem[];
  videoItems?: GalleryItem[];
}

export interface GalleryPagedata extends GallerySectionData {
  banner?: PageBanner;
}

export interface GalleryProps {
  data: GalleryPagedata;
}

export interface MissionItem {
  id: number;
  title: string;
  desc: string;
  href: string;
}

export interface MissionData {
  pretitle: string;
  title: string;
  desc: string;
  items: MissionItem[];
}

export interface MissionProps {
  data: MissionData;
}

export interface NewsletterData {
  title: string;
  pretitle: string;
  inputPlaceholder: string;
  buttonText: string;
  disclaimer: string;
}

export interface NewsletterdataProps {
  data: NewsletterData;
}

export interface Partner {
  id: number | string;
  name: string;
  logo: string;
}

export interface PartnersBanner {
  bgImageUrl: string;
  title: string;
  breadcrumbHome?: string;
  breadcrumbCurrent: string;
  homeHref?: string;
}

export interface PartnersData {
  sectionBadge: string;
  sectionTitle: string;
  sectionpretitle: string;
  banner: PartnersBanner;
  partners: Partner[];
}

export interface PartnersDataprops {
  data: PartnersData;
}

export interface Story {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  impact: string;
}

export interface StoryBanner {
  title: string;
  bgImageUrl: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface SuccessStoriesData {
  banner: StoryBanner;
  sectionBadge: string;
  sectionTitle: string;
  sectionpretitle: string;
  stories: Story[];
}

export interface SuccessStoriesProps {
  data: SuccessStoriesData;
}

export interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  role: string;
  quote: string;
  rating?: number; // Optional rating field (e.g., 5)
}

export interface TestimonialBanner {
  bgImageUrl: string;
  title: string;
  breadcrumbHome?: string;
  breadcrumbCurrent: string;
  homeHref?: string;
}

export interface TestimonialData {
  pretitle: string;
  subtitle:string
  title: string;
  description?: string; // "Real stories. Real impact..."
  banner: TestimonialBanner;
  testimonialItems: TestimonialItem[];
}

export interface TestimonialProps {
  data: TestimonialData;
}

export interface Step {
  id: number;
  number: string;
  title: string;
  desc: string;
}

export interface WorkGalleryItem {
  image: string;
  title: string;
  desc: string;
}

export interface Stat {
  id: number;
  number: string;
  title: string;
  desc: string;
}

export interface WorkData {
  pretitle: string;
  title: string;
  steps: Step[];
  Gallery: WorkGalleryItem[];
  stats: Stat[];
  statstitle: string;
}

export interface WorkProps {
  data: WorkData;
}
export interface DonationCampaignItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface GalleryPageItem {
  id: number;
  image: string;
  alt: string;
}

export interface GalleryPageData {
  pretitle: string;
  title: string;
  desc: string;
  items: GalleryPageItem[];
}

export interface LegalBannerData {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface LegalSection {
  number?: string;
  title: string;
  text: string;
  items?: string[];
}

export interface LegalCtaData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}

export interface LegalPageData {
  banner: LegalBannerData;
  sections: LegalSection[];
  ctaBanner?: LegalCtaData;
}

export interface TeamSocialLink {
  label: string;
  href: string;
}

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  role: string;
  href: string;
  socials: TeamSocialLink[];
}

export interface TeamData {
  banner: LegalBannerData;
  heading: {
    pretitle: string;
    title: string;
  };
  members: TeamMember[];
}

// Team Details
export interface TeamDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title: string;
}

export interface TeamDetailSkill {
  skill: string;
  percentage: number;
}

export interface TeamDetailTab {
  id: string;
  title: string;
  description: string;
  skills: TeamDetailSkill[];
}

export interface TeamDetailPersonalExperience {
  title: string;
  description: string;
  highlights: string[];
}

export interface TeamDetailsData {
  id: string;
  name: string;
  role: string;
  image: string;
  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    bgImageUrl: string;
    title: string;
  };
  contactInfo: {
    phone: string;
    email: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  tabs: TeamDetailTab[];
  personalExperience: TeamDetailPersonalExperience;
}

export interface TeamDetailsProps {
  data: TeamDetailsData;
}

// ================= BLOG DETAILS =================

export interface BlogDetailsBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface BlogArticleDetails {
  featuredImage: string;
  introParagraphs: string[];
  quote: string;
  midParagraph: string;
  sectionTitle: string;
  sectionDescription: string;
  bulletPoints: string[];
  concludingParagraph: string;
}

export interface BlogDetailsData {
  banner: BlogDetailsBanner;
  article: BlogArticleDetails;
}

// ================= CAREER =================

export interface CareerBanner {
  title: string;
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface WhyWorkWithUsItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface WhyWorkWithUsSection {
  title: string;
  items: WhyWorkWithUsItem[];
}

export interface OpenPositionItem {
  id: number;
  title: string;
  type: string;
  location: string;
  experience: string;
  applyLink: string;
}

export interface CustomApplicationInfo {
  title: string;
  text: string;
  email: string;
}

export interface OpenPositionsSection {
  title: string;
  positions: OpenPositionItem[];
  customApplication: CustomApplicationInfo;
}

export interface BenefitOfferItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface WhatWeOfferSection {
  title: string;
  benefits: BenefitOfferItem[];
}

export interface CareerCTAButton {
  label: string;
  href: string;
}

export interface CareerCTA {
  title: string;
  desc: string;
  button: CareerCTAButton;
}

export interface CareerData {
  banner: CareerBanner;
  whyWorkWithUs: WhyWorkWithUsSection;
  openPositions: OpenPositionsSection;
  whatWeOffer: WhatWeOfferSection;
  cta: CareerCTA;
}

export interface Careerprops{
  data: CareerData
}

// 404 / NOT FOUND
export interface NotFoundData {
  title: string;
  pretitle: string;
  buttonLabel: string;
  buttonHref: string;
  bgImageUrl: string;
}

// tax benefits
export interface TaxBenefitItem {
  id: number;
  title: string;
  icon: string; // Changed from TaxBenefitIcon union to string
}

export interface TaxBenefitsData {
  title: string;
  pretitle?: string;
  items: TaxBenefitItem[];
}

export interface TaxBenefitsProps {
  data: TaxBenefitsData;
}

export interface EmploymentInfo {
  industry: string;
  jobLevel: string;
  jobType: string;
  experience: string;
  salary: string;
  location: string;
  deadline: string;
  postedOn: string;
}

export interface WhyJoinUsItem {
  title: string;
  desc: string;
  icon: string;
}

export interface OrganizationInfo {
  name: string;
  image:string;
  tagline: string;
  viewAllJobsUrl: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  mapLocation: {
    address:string;
    iframeUrl:string;
  }
}

export interface SimilarJobItem {
  id: number;
  title: string;
  type: string;
  posted: string;
  salary: string;
  location: string;
  href:string;
}

export interface JobDetailsSidebar {
  organization: OrganizationInfo;
  similarJobs: SimilarJobItem[];
}

export interface CTABox {
  title: string;
  text: string;
  email: string;
}

export interface JobDetailsBanner {
  title: string;
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface JobDetailsData {
  title: string;
  meta: {
    type: string;
    posted: string;
  };
  employmentInfo: EmploymentInfo;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  whyJoinUs: WhyJoinUsItem[];
  sidebar: JobDetailsSidebar;
  ctaBox: CTABox;
  banner:JobDetailsBanner;
}

export interface JobDetailsProps{
  data:JobDetailsData
}

export interface ApplyFormFields {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  contactNumberLabel: string;
  contactNumberPlaceholder: string;
  defaultCountryCode: string;
  positionAppliedForLabel: string;
  positionPlaceholder: string;
  currentLocationLabel: string;
  currentLocationPlaceholder: string;
  yearsOfExperienceLabel: string;
  yearsOfExperiencePlaceholder: string;
  preferredJoiningDateLabel: string;
  linkedinPortfolioLabel: string;
  linkedinPortfolioPlaceholder: string;
  descriptionLabel: string;
  descriptionPlaceholder: string;
  maxDescriptionLength: number;
  uploadResumeLabel: string;
  uploadInstruction: string;
  uploadFormat: string;
  termsLabel: string;
  submitButtonText: string;
}

export interface SideCardFeature {
  title: string;
  desc: string;
  icon: string;
}

export interface SideCard {
  quote: string;
  subquote: string;
  features: SideCardFeature[];
}

export interface BottomTrustBadge {
  title: string;
  desc: string;
  icon: string;
}

export interface JobApplyBanner{
  breadcrumbHome:string;
  breadcrumbCurrent:string;
  title:string;
  bgImageUrl:string;
}

export interface JobApplyData {
  title: string;
  header: {
    title: string;
    subtitle: string;
  };
  form: ApplyFormFields;
  sideCard: SideCard;
  banner:JobApplyBanner;
  bottomTrustBadges: BottomTrustBadge[];
}

export interface JobApplyprops{
  data:JobApplyData
}

export interface EventBanner {
  bgImageUrl: string;
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface EventButton {
  joinEvent: string;
  viewAll: string;
  href: string;
}

export interface EventPagination {
  totalPages: number;
  currentPage: number;
  itemperpage:number
}

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  location: string;
  desc?: string;
  day?: string;
  month?: string;
  time?: string;
}

export interface EventsData {
  pretitle: string;
  title: string;
  banner: EventBanner;
  button: EventButton;
  pagination?: EventPagination;
  items: EventItem[];
}

export interface EventsProps {
  data: EventsData;
}

/* Event Details Interfaces */

export interface EventDetailsMap {
  address: string;
  iframeUrl: string;
}

export interface EventDetailsContent {
  featuredImage: string;
  date: string;
  location: string;
  title: string;
  intro: string;
  summaryTitle: string;
  summaryDesc: string;
  checklists: string[];
  gallery: string[];
  mapLocation: EventDetailsMap;
}

export interface RecentPostItem {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export interface PromoWidget {
  tagline: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface EventDetailsSidebar {
  recentPostsTitle: string;
  recentPosts: RecentPostItem[];
  promoWidget: PromoWidget;
}

export interface EventDetailsData {
  banner: EventBanner;
  content: EventDetailsContent;
  sidebar: EventDetailsSidebar;
}

export interface EventDetailsProps {
  data: EventDetailsData;
}

export interface Sitemapbanner {
  bgImageUrl: string;
  breadcrumbCurrent: string;
  breadcrumbHome: string;
}

export interface SitemapPageHeader {
  badge: string;
  title: string;
  description: string;
  banner: Sitemapbanner;
}

export interface SitemapLink {
  label: string;
  href: string;
  desc?: string;
}

export interface SitemapCategory {
  id: number;
  category: string;
  links: SitemapLink[];
}

export interface SitemapData {
  pageHeader: SitemapPageHeader;
  sitemapCategories: SitemapCategory[];
}

export interface SitemapProps {
  data: SitemapData;
}

export interface MissionHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MissionPageData {
  slug: string;
  eyebrow: string;
  breadcrumbHome: string;
  title: string;
  breadcrumbCurrent: string;
  bannerImage: string;
  sectionTitle: string;
  highlightedTitle: string;
  sectionText: string;
  sectionImage: string;
  highlights: MissionHighlight[];
}

export interface MissionPageProps {
  data: MissionPageData;
}

export interface VisionBanner {
  breadcrumbCurrent: string;
  title: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface VisionIntroduction {
  title: string;
  heading: {
    line1: string;
    highlight: string;
  };
  underline: boolean;
  highlightColor: string;
  headingColor: string;
  mainStatement: string;
  description: string;
}

export interface VisionCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface VisionQuote {
  icon: string;
  text: string;
  showWorldMap: boolean;
}

export interface VisionData {
  banner: VisionBanner;
  introduction: VisionIntroduction;
  visionCards: VisionCard[];
  quote: VisionQuote;
}

export interface VisionProps {
  data: VisionData;
}

export interface FaqBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface FaqData {
  banner: FaqBanner;
}

export interface FaqProps {
  data: FaqData;
}

export interface ServiceBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface ServiceIntroduction {
  badge: string;
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
}

export interface ServiceStat {
  id: string;
  iconName: string;
  value: string;
  label: string;
}

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  label: string;
  href: string;
  image: ServiceImage;
}

export interface ServiceBottomBanner {
  title: string;
  iconName: string;
  description: string;
}

export interface ServiceData {
  banner: ServiceBanner;
  introduction: ServiceIntroduction;
  stats: ServiceStat[];
  services: ServiceItem[];
  bottomBanner: ServiceBottomBanner;
}

export interface ServiceProps {
  data: ServiceData;
}

// Service details
export interface ServiceDetailsCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ServiceDetailsFeatureItem {
  id: string;
  text: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
  image: string;
}


export interface ServiceDetailContent {
  mainImage: string;
  descriptionParagraphs: string[];
  heading: string;
  subHeading: string;
  featureGrid: ServiceDetailsFeatureItem[];
  subServices: SubService[];
}

export interface SidebarCta {
  tagline: string;
  title: string;
  buttonText: string;
  buttonUrl: string;
  bgImage: string;
}
export interface ServiceDetailsBanner{
  breadcrumbHome:string;
  breadcrumbCurrent:string;
  title:string;
  bgImageUrl:string;
}

export interface ServicesDetailsPageData {
  categories: ServiceDetailsCategory[];
  sidebarCta: SidebarCta;
  servicesDataMap: Record<string, ServiceDetailContent>;
  banner:ServiceDetailsBanner
}

export interface ServiceDetailsProps{
  data:ServicesDetailsPageData
}

export interface chooseheighlight {
  normal: string;
  highlighted: string;
}

export interface WhyChooseUsIntroduction {
  badge: string;
  title: chooseheighlight;
  description: string;
}

export interface ChooseFeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  themeColor: "orange" | "green";
  href?: string;
}

export interface WhyChooseUsSideImage {
  src: string;
  alt: string;
}

export interface WhyChooseUsOverlayCard {
  iconName: string;
  title: chooseheighlight;
  description: string;
}

export interface WhyChooseUsData {
  introduction: WhyChooseUsIntroduction;
  features: ChooseFeatureItem[];
  sideImage: WhyChooseUsSideImage;
  overlayCard: WhyChooseUsOverlayCard;
}

export interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

export interface AwardBanner {
  title: string;
  bgImageUrl: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface AwardHeading {
  title: string;
  subtitle: string;
}

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  issuedBy: string;
  imageUrl: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuedBy: string;
  imageUrl: string;
}

export interface AwardStatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  type: 'trophy' | 'certificate' | 'calendar' | 'users';
}

export interface BannerCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface AwardData {
  banner: AwardBanner;
  heading: AwardHeading;
  awardsList: AwardItem[];
  certificatesHeading: { title: string };
  certificatesList: CertificateItem[];
  stats: AwardStatItem[];
  bannerCTA: BannerCTA;
}

export interface AwardProps {
  data: AwardData;
}

export interface CsrBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface CommitmentCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CommitmentSection {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  cards: CommitmentCard[];
}

export interface FocusAreaItem {
  id: string | number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  iconName: string;
}

export interface FocusAreasSection {
  title: string;
  items: FocusAreaItem[];
}

export interface ImpactStatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ImpactSection {
  title: string;
  stats: ImpactStatItem[];
}

export interface InitiativeCard {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

export interface RecentInitiativesSection {
  subtitle: string;
  viewAllText: string;
  viewAllUrl: string;
  cards: InitiativeCard[];
}

export interface CounterStatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface CsrData {
  banner: CsrBanner;
  commitment: CommitmentSection;
  focusAreas: FocusAreasSection;
  impact: ImpactSection;
  recentInitiatives: RecentInitiativesSection;
  counterStats: CounterStatItem[];
}

export interface CsrProps {
  data: CsrData;
}

export interface EnquiryBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface EnquiryHeader {
  pretitle: string;
  title: string;
  description: string;
}

export interface ContactDetailItem {
  icon: string;
  title: string;
  value: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface GetInTouchSection {
  bgImageUrl: string;
  quoteText: string;
  title: string;
  contactItems: ContactDetailItem[];
}

export interface QuickResponseSection {
  title: string;
  subtitle: string;
  timeframe: string;
  thankYouText: string;
}

export interface ConnectWithUsSection {
  title: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface FaqSection {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export interface PreferredContactOption {
  label: string;
  value: string;
  defaultChecked?: boolean;
}

export interface FileUploadConfig {
  label: string;
  optionalTag: string;
  chooseText: string;
  dragText: string;
  supportedFormatsText: string;
}

export interface EnquiryFormSection {
  formHeaderTitle: string;
  formHeaderSubtitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  mobileLabel: string;
  mobilePlaceholder: string;
  orgNameLabel: string;
  orgNameOptionalTag: string;
  orgNamePlaceholder: string;
  cityStateLabel: string;
  cityStatePlaceholder: string;
  enquiryTypeLabel: string;
  enquiryTypeOptions: FormOption[];
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  fileUpload: FileUploadConfig;
  preferredContactLabel: string;
  preferredContactOptions: PreferredContactOption[];
  consentText: string;
  privacyLinkText: string;
  termsLinkText: string;
  href:string;
  submitButtonText: string;
}

export interface EnquiryData {
  banner: EnquiryBanner;
  header: EnquiryHeader;
  getInTouch: GetInTouchSection;
  quickResponse: QuickResponseSection;
  connectWithUs: ConnectWithUsSection;
  faqSection: FaqSection;
  form: EnquiryFormSection;
}

export interface EnquiryProps {
  data: EnquiryData;
}

export interface CaseStudyBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface CaseItem {
  id: number | string;
  iconName: string;
  title: string;
  description: string;
  imageUrl: string;
  label: string;
  href: string;
}

export interface CausesSection {
  pretitle: string;
  title: string;
  description: string;
  items: CaseItem[];
  footerBanner: {
    text: string;
    tagline: string;
  };
}

export interface CaseStudyData {
  banner: CaseStudyBanner;
  causes: CausesSection;
}

export interface CaseStudyProps {
  data: CaseStudyData;
}

export interface CaseStudyDetailBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface OverviewSection {
  title: string;
  paragraphs: string[];
  whatWeDidTitle: string;
  whatWeDidPoints: string[];
}

export interface ImpactStatCard {
  number: string;
  label: string;
  description: string;
  icon?: string;
}

export interface CaseStudyImpactSection {
  title: string;
  stat: ImpactStatCard[];
}

export interface AdditionalOverviewSection {
  title: string;
  text: string;
}

export interface CaseStudyDetailContent {
  overview: OverviewSection;
  impact: CaseStudyImpactSection;
  additionalOverview?: AdditionalOverviewSection;
}

export interface CaseStudyDetailData {
  banner: CaseStudyDetailBanner;
  content: CaseStudyDetailContent;
}

export interface CaseStudyDetailProps {
  data: CaseStudyDetailData;
}

export interface SupportBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface SupportChannelItem {
  title: string;
  description: string;
  actionText: string;
  type?: "button" | "text";
  actionUrl: string;
}

export interface WayToSupportItem {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface WaysToSupportData {
  sectionTitle: string;
  items: WayToSupportItem[];
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface HelpSectionData {
  subTitle?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  mainImage?: string;
  secondaryImage?: string;
  quoteText?: string;
  accordions: AccordionItem[];
}

export interface ResourceItem {
  title: string;
  description: string;
  linkUrl: string;
}

export interface HelpfulResourcesData {
  title: string;
  description: string;
  resources: ResourceItem[];
}

export interface CtaBannerData {
  title: string;
  pretitle: string;
  callTitle: string;
  phoneNumber: string;
  subText?: string;
  actionUrl: string;
}

export interface SupportContent {
  supportChannels: SupportChannelItem[];
  helpSection?: HelpSectionData;
  helpfulResources: HelpfulResourcesData;
  ctaBanner: CtaBannerData;
}

export interface SupportData {
  banner: SupportBanner;
  waysToSupport?: WaysToSupportData;
  helpSection?: HelpSectionData;
  content?: SupportContent;
}

export interface SupportProps {
  data: SupportData;
}

export interface BranchesBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface BranchLocation {
  name: string;
  isHeadOffice?: boolean;
  address: string;
  phone: string;
  email: string;
  image: string;
  buttonText: string;
}

export interface ImpactFeature {
  title: string;
  description: string;
  icon: string;
}

export interface PartnerCta {
  title: string;
  description: string;
  buttonText: string;
  getInTouchTitle: string;
  phone: string;
  email: string;
  website: string;
}

export interface BottomBannerCta {
  text: string;
  subtext: string;
  buttonText: string;
}

export interface BranchesContent {
  tagline: string;
  mainTitle: string;
  highlightTitle: string;
  description: string;
  sectionTitle?: string;
  sectionDescription?: string;
  filterPlaceholder?: string;
  locations: BranchLocation[];
  viewAllButtonText: string;
  features: ImpactFeature[];
  partnerCta: PartnerCta;
  bottomCta: BottomBannerCta;
}

export interface BranchesData {
  banner: BranchesBanner;
  content: BranchesContent;
}

export interface BranchesProps {
  data: BranchesData;
}

export interface BrochureBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface BrochureItem {
  title: string;
  category: string;
  fileSize: string;
  fileType?: string;
  imageUrl: string;
  fileUrl: string;
}

export interface BrochureContent {
  mainTitle: string;
  title:string;
  description: string;
  searchPlaceholder?: string;
  categories?: string[];
  brochures: BrochureItem[];
}

export interface BrochureData {
  banner: BrochureBanner;
  content?: BrochureContent;
}

export interface BrochureProps {
  data: BrochureData;
}

export interface MediaBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface MediaCardItem {
  title: string;
  logoUrl: string;
  articleUrl?: string;
}

export interface MediaContent {
  tagline?: string;
  sectionTitle: string;
  sectionDescription?: string;
  bottomCaption?: string;
  viewAllText?: string;
  viewAllUrl?: string;
  mediaCards: MediaCardItem[];
}

export interface MediaData {
  banner: MediaBanner;
  content?: MediaContent;
}

export interface MediaProps {
  data: MediaData;
}

export interface DonateBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface AmountOption {
  amount: string;
  isSelected?: boolean;
}

export interface PaymentMethod {
  id: string;
  label: string;
  value: string;
  isDefault?: boolean;
}

export interface FormFieldsConfig {
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
  securityNotice: string;
}

export interface RecentCauseItem {
  id: number | string;
  title: string;
  date: string;
  imageUrl: string;
  slug?: string;
}

export interface SidebarContent {
  searchPlaceholder: string;
  recentCausesTitle: string;
  viewAllLinkText: string;
  viewAllLinkUrl: string;
  recentCauses: RecentCauseItem[];
  promoBanner: {
    tagline: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
    bgImageUrl?: string;
  };
}

export interface DonateMainContent {
  heroCard: {
    badgeText: string;
    subtext: string;
    imageUrl: string;
  };
  sectionBadge: string;
  title: string;
  highlightedTitleWord: string;
  description: string;
  amountSectionTitle: string;
  customAmountPlaceholder: string;
  amounts: AmountOption[];
  paymentSectionTitle: string;
  paymentMethods: PaymentMethod[];
  personalInfoTitle: string;
  formFields: FormFieldsConfig;
}

export interface DonateData {
  banner: DonateBanner;
  content: DonateMainContent;
  sidebar: SidebarContent;
}

export interface DonateProps {
  data: DonateData;
}

export interface StatItem {
  id?: string | number;
  number: string | number;
  suffix?: string; // e.g., "+", "%", "k"
  title: string;
  iconName: string;
}

export interface StatsData {
  stats: StatItem[];
  bgImage?: string;
  gradientStartColor?: string; // Default: '#0F2916'
}

export interface StatsProps {
  data: StatsData;
}

export interface CtaCard {
  subtitle: string;
  title: string;
  bgImageUrl: string;
  buttonText: string;
  buttonHref: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  overlayColor?: string;
}

export interface VideoCenterData {
  bgImageUrl: string;
  videoUrl?: string;
}

export interface CtaBannerData {
  leftCard: CtaCard;
  centerVideo: VideoCenterData;
  rightCard: CtaCard;
}

export interface CtaBannerProps {
  data: CtaBannerData;
}

export interface HowWeHelpCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface HowWeHelpProps {
  data: {
    badge: string;
    title: string;
    description: string;
    cards: HowWeHelpCard[];
  };
}

export interface FactStat {
  id: number;
  value: string;
  label: string;
  icon: string;
  variant: "light" | "dark";
  accentColor: "green" | "orange";
}

export interface FactsData {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  mainImage: string;
  secondaryImage: string;
  footerText: string;
  stats: FactStat[];
}

export interface FactsProps {
  data: FactsData;
}
