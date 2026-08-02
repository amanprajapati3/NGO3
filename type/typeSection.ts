
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

export interface AboutMission {
  pretitle: string;
  title: string;
  desc: string;
  points: string[];
}

export interface AboutBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  image: string;
}

export interface AboutStory {
  pretitle: string;
  title: string;
  desc: string;
  image: string;
}

export interface AboutDreamItem {
  id: number;
  number: string;
  title: string;
  desc: string;
  badge: string;
}

export interface AboutDreamSection {
  pretitle: string;
  title: string;
  items: AboutDreamItem[];
}

export interface AboutValueItem {
  number: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AboutValues {
  pretitle: string;
  title: string;
  items: AboutValueItem[];
}

export interface AboutCTA {
  title: string;
  desc: string;
  button: ButtonItem;
}

export interface AboutPageContent {
  banner: AboutBanner;
  mission: AboutMission;
  story: AboutStory;
  dreamSection: AboutDreamSection;
  values: AboutValues;
  cta: AboutCTA;
}

export interface AboutCard {
  id: number;
  title: string;
  desc: string;
  buttonLabel: string;
  href: string;
}

export interface AboutPageData {
  sideImage: string;
  pretitle: string;
  title: string;
  philosophyDesc: string;
  desc: string;
  buttons: ButtonItem[];
  cards: AboutCard[];
  page: AboutPageContent;
}

export interface AboutPageProps{
  data: AboutPageData
}

// ================= BLOG =================

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  category?: string;
}

export interface BlogButton {
  label: string;
}

export interface banner {
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
  banner: banner;
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

export interface ContactInfoItem {
  iconTitle: string;
  value: string;
}

export interface ContactFormLabels {
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
}

export interface ContactSuccessMessage {
  title: string;
}

export interface contactMap{
  title:string;
  address:string;
  embedUrl:string;
}

export interface ContactSectionData {
  banner: ContactBanner;
  heading: ContactHeading;
  officeInfo: ContactInfoItem[];
  formLabels: ContactFormLabels;
  successMessage: ContactSuccessMessage;
  map: contactMap;
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

export interface FaqHeading {
  pretitle: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSidebarCallout {
  title: string;
  description: string;
  imageUrl: string;
  imageTagText: string;
}

export interface FaqSupportContact {
  phone: string;
  email: string;
  website: string;
}

export interface FaqSupportSection {
  title: string;
  description: string;
  contact: FaqSupportContact;
}

export interface FaqData {
  banner: FaqBanner;
  heading: FaqHeading;
  items: FaqItem[];
  sidebarCallout?: FaqSidebarCallout;
  supportSection?: FaqSupportSection;
  quote?: string;
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
  category?: string; // Optional property for filtering support
}

export interface GallerySectionData {
  pretitle: string;
  title: string;
  desc: string;
  items: GalleryItem[];
}

// Complete Page Data structure including banner
export interface GalleryPagedata extends GallerySectionData {
  banner?: PageBanner;
}

// Component Props interface
export interface GalleryProps {
  data: GallerySectionData;
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

export interface ProgramHighlight {
  title: string;
  description: string;
}

export interface ProgramStat {
  value: string;
  label: string;
}

export interface ProgramApproach {
  title: string;
  description: string;
}

export interface ProgramImpact {
  title: string;
  description: string;
  points: string[];
}

export interface ProgramDetails {
  title: string;
  description: string;
  mission: string;
  approach: ProgramApproach[];
  activities: string[];
  impact: ProgramImpact;
}

export interface ProgramDetailCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

export interface ProgramCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

export interface ProgramPageData {
  slug?: string;
  eyebrow: string;
  title: string;
  intro: string;
  bannerImage: string;

  sectionTitle: string;
  sectionText: string;
  sectionImage: string;

  highlights: ProgramHighlight[];
  stats: ProgramStat[];

  buttons: ButtonItem[];

  details?: ProgramDetails;

  detailCta: ProgramDetailCTA;

  cta: ProgramCTA;
}

export interface NewsletterData {
  title: string;
  pretitle: string;
  inputPlaceholder: string;
  buttonText: string;
  disclaimer: string;
}

export interface NewsletterdataProps {
  data: NewsletterData
}

export interface Partner {
  id: number | string;
  name: string;
  logo: string;
}

export interface PartersBanner{
  bgImageUrl: string;
  title?: string;
  breadcrumbHome?: string;
  breadcrumbCurrent?: string;
  homeHref?: string;
}

export interface PartnersData {
  sectionBadge: string;
  sectionTitle: string;
  sectionpretitle: string;
  banner : PartersBanner;
  partners: Partner[];
}

export interface PartnersDataprops {
  data: PartnersData
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
}

export interface TestimonialBanner{
  bgImageUrl: string;
  title?: string;
  breadcrumbHome?: string;
  breadcrumbCurrent?: string;
  homeHref?: string;
}

export interface TestimonialData {
  pretitle: string;
  title: string;
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
  statstitle: string
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
  title: string;
  text: string;
  items?: string[];
}

export interface LegalPageData {
  banner: LegalBannerData;
  sections: LegalSection[];
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
  href:string;
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

// team details
export interface TeamDetailStat {
  value: string;
  label: string;
}

export interface TeamDetailContactInfo {
  email: string;
  phone: string;
  location: string;
  qualification: string;
  languages: string[];
}

export interface TeamDetailsBanner{
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title:string;
}

export interface TeamDetailSocialLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

export interface TeamDetailSkill {
  skill: string;
  percentage: number;
}

export interface TeamDetailExperience {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface TeamDetailAchievement {
  title: string;
  description: string;
}

export interface TeamDetailsData {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  banner:TeamDetailsBanner;
  stats: TeamDetailStat[];
  contactInfo: TeamDetailContactInfo;
  socialLinks: TeamDetailSocialLinks;
  about: string[];
  skills: TeamDetailSkill[];
  experience: TeamDetailExperience[];
  achievements: TeamDetailAchievement[];
}

export interface TeamDetailsProps {
  data: TeamDetailsData;
}

// ================= BLOG DETAILS =================

export interface BlogDetailsBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbParent: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface BlogAuthorBox {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface BlogNavigation {
  title: string;
  href: string;
}

export interface BlogArticle {
  title: string;
  image: string;
  date: string;
  author: string;
  commentsCount: number;
  paragraphs: string[];
  quote: string;
  tags: string[];
  authorBox: BlogAuthorBox;
  previous: BlogNavigation;
  next: BlogNavigation;
}

export interface BlogComment {
  id: number;
  name: string;
  date: string;
  avatar: string;
  text: string;
}

export interface BlogDetailsData {
  banner: BlogDetailsBanner;
  article: BlogArticle;
  comments: BlogComment[];
}

// ================= CAREER =================

export interface CareerButton {
  label: string;
  href: string;
}

export interface CareerBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title: string;
}

export interface CareerAbout {
  pretitle: string;
  title: string;
  desc: string;
}

export interface CareerBenefitItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface CareerBenefits {
  title: string;
  items: CareerBenefitItem[];
}

export interface CareerJobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  desc: string;
  applyLink: string;
}

export interface CareerJobs {
  title: string;
  desc: string;
  positions: CareerJobPosition[];
}

export interface CareerProcessStep {
  id: number;
  title: string;
  desc: string;
}

export interface CareerProcess {
  title: string;
  steps: CareerProcessStep[];
}

export interface CareerCTA {
  title: string;
  desc: string;
  button: CareerButton;
}

export interface CareerData {
  banner: CareerBanner;
  about: CareerAbout;
  benefits: CareerBenefits;
  jobs: CareerJobs;
  process: CareerProcess;
  cta: CareerCTA;
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


export interface JobDetail {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salaryRange?: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface JobDetailsBanner {
  bgImageUrl: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string
}

export interface JobDetailsSectionLabels {
  overviewTitle: string;
  responsibilitiesTitle: string;
  requirementsTitle: string;
  benefitsTitle: string;
  applyTitle: string;
  applypretitle: string;
  successTitle: string;
  successMessage: string;
}

export interface JobDetailsForm {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  portfolioLabel: string;
  portfolioPlaceholder: string;
  resumeLabel: string;
  resumeButtonText: string;
  coverLetterLabel: string;
  coverLetterPlaceholder: string;
  submitButtonText: string;
}

export interface JobDetailsPageData {
  banner: JobDetailsBanner;
  sectionLabels: JobDetailsSectionLabels;
  form: JobDetailsForm;
  jobs: JobDetail[];
}

// ===============================
// Events Section
// ===============================

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

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  desc: string;
  image: string;
  day: string;
  month: string;
  time: string;
  location: string;
}

export interface EventsData {
  pretitle: string;
  title: string;
  banner: EventBanner;
  button: EventButton;
  items: EventItem[];
}

// Props for reusable Event component
export interface EventsProps {
  data: EventsData;
}

export interface DetailsBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent:string;
  bgImageUrl: string;
}

export interface DetailsButton {
  label: string;
  href: string;
}

export interface DetailsContent {
  featuredImage: string;
  date: string;
  author: string;
  location?: string;
  category: string;
  title: string;
  intro: string;
  paragraphs: string[];
  quote: string;
  gallery: string[];
  conclusion: string;
  button: DetailsButton;
}

export interface DetailsData {
  banner: DetailsBanner;
  content: DetailsContent;
}

export interface EventDetailsProps {
  data: DetailsData;
}

export interface BlogDetailsProps {
  data: DetailsData;
}

export interface Sitemapbanner{
  bgImageUrl:string;
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
  title: string;
  description: string;
}

export interface MissionStat {
  value: string;
  label: string;
}

export interface MissionButton {
  label: string;
  href: string;
}

export interface MissionValue {
  title: string;
  description: string;
}

export interface MissionApproach {
  title: string;
  description: string;
}

export interface MissionImpact {
  title: string;
  description: string;
  points: string[];
}

export interface MissionGoal {
  title: string;
  description: string;
}

export interface MissionDetails {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: MissionValue[];
  approach: MissionApproach[];
  activities: string[];
  impact: MissionImpact;
  goals: MissionGoal[];
}

export interface MissionCta {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

export interface MissionPageData {
  slug: string;
  eyebrow: string;
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bannerImage: string;
  title: string;
  sectionTitle: string;
  sectionText: string;
  sectionImage: string;

  highlights: MissionHighlight[];
  stats: MissionStat[];
  buttons: MissionButton[];

  details: MissionDetails;

  detailCta: MissionCta;
  cta: MissionCta;
}

export interface MissionPageProps {
  data: MissionPageData;
}

export interface VisionBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface VisionIntroductionHeading {
  line1: string;
  highlight: string;
}

export interface VisionIntroduction {
  icon: string;
  heading: VisionIntroductionHeading;
  underline: boolean;
  highlightColor: string;
  headingColor: string;
  mainStatement: string;
  description: string;
}

export interface VisionCardImage {
  src: string;
  alt: string;
}

export interface VisionCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: VisionCardImage;
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

export interface FaqBanner{
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface FaqData{
  banner: FaqBanner
}

export interface FaqProps{
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
  title: string;
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
  href:string;
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

export interface AwardBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface AwardHeading {
  pretitle: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface AwardItem {
  id: string | number;
  title: string;
  description: string;
  year: string;
  imageUrl: string;
}

export interface AwardSectionData {
  sectionTitle: string;
  viewAllText: string;
  viewAllUrl: string;
  items: AwardItem[];
}

export interface AwardData {
  banner: AwardBanner;
  heading: AwardHeading;
  awardsList: AwardSectionData;
  quote: string;
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

export interface FocusAreaItem {
  id: string | number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  iconName: string; // e.g., "education", "healthcare", "livelihoods", "environment"
}

export interface FocusAreasSection {
  title: string;
  items: FocusAreaItem[];
}

export interface ApproachStep {
  title: string;
  description: string;
  iconName: string;
}

export interface CommitmentPoint {
  text: string;
}

export interface CommitmentsCard {
  title: string;
  description: string;
  points: CommitmentPoint[];
}

export interface ApproachSection {
  title: string;
  centerTitle: string;
  steps: ApproachStep[];
  commitments: CommitmentsCard;
}

export interface ImpactStatItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ImpactSection {
  title: string;
  pretitle: string;
  stats: ImpactStatItem[];
}

export interface CsrData {
  banner: CsrBanner;
  focusAreas: FocusAreasSection;
  approach: ApproachSection;
  impact: ImpactSection;
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

export interface ContactDetailItem {
  icon: string; // Icon identifier (e.g., 'location', 'phone', 'email', 'globe', 'clock')
  title: string;
  value: string;
}

export interface GetInTouchSection {
  bgImageUrl: string;
  quoteText: string;
  title: string;
  contactItems: ContactDetailItem[];
}

export interface SubjectOption {
  label: string;
  value: string;
}

export interface EnquiryFormSection {
  title: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  subjectOptions: SubjectOption[];
  categoryOptions: SubjectOption[];
  messagePlaceholder: string;
  consentText: string;
  privacyLinkText: string;
  termsLinkText: string;
  submitButtonText: string;
}

export interface EnquirySectionHeader {
  pretitle: string;
  title: string;
  description: string;
}

export interface EnquiryData {
  banner: EnquiryBanner;
  header: EnquirySectionHeader;
  getInTouch: GetInTouchSection;
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

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  readMoreUrl?: string;
}

export interface CaseStudyContent {
  itemsPerPage?: number;
  studies: CaseStudyItem[];
}

export interface CaseStudyData {
  banner: CaseStudyBanner;
  content?: CaseStudyContent;
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

export interface AccordionItem {
  title: string;
  content: string;
}

export interface HelpSectionData {
  title: string;
  description: string;
  imageUrl: string;
  quoteText: string;
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
  helpSection: HelpSectionData;
  helpfulResources: HelpfulResourcesData;
  ctaBanner: CtaBannerData;
}

export interface SupportData {
  banner: SupportBanner;
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
  state: string;
  description: string;
  phone: string;
  email: string;
  timing: string;
}

export interface BranchesContent {
  tagline: string;
  mainTitle: string;
  highlightTitle: string;
  description: string;
  sectionTitle: string;
  sectionDescription: string;
  filterPlaceholder: string;
  locations: BranchLocation[];
}

export interface BranchesData {
  banner: BranchesBanner;
  content?: BranchesContent;
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
  description: string;
  fileUrl: string;
}

export interface BrochureContent {
  tagline: string;
  mainTitle: string;
  description: string;
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
  sectionTitle: string;
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
  description: string;
  isPopular?: boolean;
}

export interface PaymentMethod {
  id: string;
  title: string;
  pretitle: string;
}

export interface ImpactFeature {
  title: string;
  description: string;
  icon: string;
}

export interface GuaranteeItem {
  title: string;
  description: string;
  icon?: string;
}

export interface DonateContent {
  pretitle: string;
  title: string;
  description: string;
  amounts: AmountOption[];
  quoteText: string;
  quoteAuthor?: string;
  gridImages: string[];
  impactFeatures: ImpactFeature[];
  guarantees?: GuaranteeItem[];
  thankYouText?: string;
}

export interface DonateData {
  banner: DonateBanner;
  content?: DonateContent;
}

export interface DonateProps {
  data: DonateData;
}