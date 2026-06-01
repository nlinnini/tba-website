/* =========================================================
   THE BANANA APPLICATIONS — EASY EDIT FILE
   No folders needed. Upload all files to GitHub root.
   ========================================================= */
const BOOKING_LINK = "https://calendly.com/thebananaapplications/free-consultation";
const INSTAGRAM_LINK = "https://www.instagram.com/thebananaapplications";
const FACEBOOK_LINK = "https://www.facebook.com/TheBananaApplications";
const EMAIL = "thebananaapplications@gmail.com";

const DESTINATIONS = [
  "Rice University.png", "NYU.png", "UToronto.png", "UBC.png",
  "UMichigan.png", "UAlberta.png", "UCalgary.png", "YorkU.png", "UIllinois.png", "UMass.png", "UMinnesota.png", "RIT.png"
];

const RESULTS = [
  {
    id: "uwc-scholarship",
    category: "Scholarships",
    image: "result-uwc-full-scholarship.png",
    schoolEN: "UWC Changshu China",
    schoolVI: "UWC Changshu China",
    outcomeEN: "Full scholarship nomination",
    outcomeVI: "Đề cử học bổng toàn phần",
    highlightEN: "100% tuition + living support",
    highlightVI: "100% học phí + hỗ trợ chi phí sinh hoạt",
    metaEN: "High school · Global education · Acceptance rate <5%",
    metaVI: "High school · Giáo dục quốc tế · Acceptance rate <5%",
    supportEN: "TBA supported profile positioning, application storytelling, interview preparation, and final-round strategy.",
    supportVI: "TBA hỗ trợ định vị profile, storytelling cho hồ sơ, chuẩn bị phỏng vấn và chiến lược cho vòng cuối.",
    noteEN: "Personal information is blurred for privacy.",
    noteVI: "Thông tin cá nhân đã được che để bảo mật.",
    tags: ["Scholarship", "High School", "Interview"]
  },
  {
    id: "rice-ed",
    category: "Admissions",
    image: "result-rice-ed.png",
    schoolEN: "Rice University",
    schoolVI: "Rice University",
    outcomeEN: "Early Decision acceptance",
    outcomeVI: "Trúng tuyển Early Decision",
    highlightEN: "Two TBA mentees admitted",
    highlightVI: "Hai mentee của TBA được nhận",
    metaEN: "United States · Hidden Ivy · #17 National University",
    metaVI: "Hoa Kỳ · Hidden Ivy · #17 National University",
    supportEN: "TBA helped with essay direction, activities positioning, school fit, and application strategy.",
    supportVI: "TBA hỗ trợ định hướng bài luận, cách trình bày hoạt động, school fit và chiến lược apply.",
    noteEN: "Screenshots are anonymized and used as representative proof of outcomes.",
    noteVI: "Ảnh đã được ẩn danh và dùng làm minh chứng thành tích đại diện.",
    tags: ["Admission", "US", "Essay"]
  }
];

const SERVICES = [
  { icon:"✦", titleEN:"Profile Strategy", titleVI:"Định hướng profile", descEN:"Diagnose strengths, gaps, application themes, target countries, and positioning.", descVI:"Phân tích điểm mạnh, điểm yếu, theme hồ sơ, quốc gia mục tiêu và định vị profile.", deliverEN:["Profile diagnosis", "Theme & positioning", "Priority roadmap"], deliverVI:["Phân tích profile", "Theme & định vị", "Lộ trình ưu tiên"] },
  { icon:"✍", titleEN:"Essay & Storytelling", titleVI:"Luận & storytelling", descEN:"Turn lived experience into essays with clear voice, structure, and purpose.", descVI:"Biến trải nghiệm cá nhân thành bài luận có voice thật, cấu trúc rõ và mục đích thuyết phục.", deliverEN:["Brainstorming", "Outline review", "Draft feedback"], deliverVI:["Brainstorm ý tưởng", "Sửa outline", "Feedback bản nháp"] },
  { icon:"◈", titleEN:"Scholarship Planning", titleVI:"Chiến lược học bổng", descEN:"Shortlist scholarships, review eligibility, and plan essays around fit.", descVI:"Lọc học bổng phù hợp, kiểm tra điều kiện và lên chiến lược bài luận.", deliverEN:["Scholarship list", "Deadline tracker", "Essay strategy"], deliverVI:["Danh sách học bổng", "Tracker deadline", "Chiến lược luận"] },
  { icon:"☀", titleEN:"Summer Programs", titleVI:"Chương trình hè", descEN:"Find selective programs and academic opportunities that support the student’s story.", descVI:"Tìm chương trình hè và cơ hội học thuật phù hợp với câu chuyện của học sinh.", deliverEN:["Program shortlist", "Fit notes", "Application timeline"], deliverVI:["Danh sách chương trình", "Ghi chú độ fit", "Timeline apply"] },
  { icon:"♛", titleEN:"Competitions & Projects", titleVI:"Cuộc thi & dự án", descEN:"Build credible outcomes through competitions, passion projects, research, and impact work.", descVI:"Xây dựng thành tích thuyết phục qua cuộc thi, passion project, research và impact work.", deliverEN:["Opportunity map", "Project direction", "Impact wording"], deliverVI:["Bản đồ cơ hội", "Định hướng project", "Cách viết impact"] },
  { icon:"→", titleEN:"Canada/US Applications", titleVI:"Apply Canada/US", descEN:"Plan school lists, portals, documents, deadlines, scholarships, and application priorities.", descVI:"Lên school list, portal, giấy tờ, deadline, học bổng và thứ tự ưu tiên khi apply.", deliverEN:["School list", "Application tracker", "Final checklist"], deliverVI:["School list", "Tracker hồ sơ", "Checklist cuối"] }
];

const PROCESS = [
  {n:"01", titleEN:"Free Consultation", titleVI:"Tư vấn miễn phí", bodyEN:"A first call to understand goals, timeline, target countries, budget sensitivity, and the student’s current profile.", bodyVI:"Buổi call đầu tiên để hiểu mục tiêu, timeline, quốc gia apply, mức độ hỗ trợ cần thiết và profile hiện tại.", outputEN:"Initial direction + recommended next step", outputVI:"Định hướng ban đầu + bước tiếp theo phù hợp"},
  {n:"02", titleEN:"Discovery & Diagnosis", titleVI:"Phân tích profile", bodyEN:"We identify strengths, gaps, personality, interests, constraints, and the application story that can anchor the strategy.", bodyVI:"TBA tìm điểm mạnh, điểm yếu, tính cách, sở thích, giới hạn và câu chuyện hồ sơ có thể làm nền tảng chiến lược.", outputEN:"Profile audit + strategic theme", outputVI:"Audit profile + theme chiến lược"},
  {n:"03", titleEN:"Personalized Roadmap", titleVI:"Lộ trình cá nhân hoá", bodyEN:"Mentors support profile-building through extracurriculars, passion projects, research opportunities, competitions, summer programs, and milestones.", bodyVI:"Mentor đồng hành xây dựng profile qua hoạt động ngoại khoá, passion project, research project, cuộc thi, chương trình hè và milestone cụ thể.", outputEN:"Roadmap + monthly execution priorities", outputVI:"Lộ trình + ưu tiên thực hiện từng tháng"},
  {n:"04", titleEN:"Application Sprint", titleVI:"Giai đoạn hoàn thiện hồ sơ", bodyEN:"We finalize school lists, scholarship targets, essay ideas, revisions, activities list, resume, documents, and submission readiness.", bodyVI:"TBA cùng học sinh finalize list trường, học bổng, ý tưởng luận, sửa luận, activities list, resume, giấy tờ và chuẩn bị nộp hồ sơ.", outputEN:"Complete application package", outputVI:"Bộ hồ sơ hoàn chỉnh để nộp"}
];

const FAQS = [
  { qEN:"Do you publish pricing on the website?", qVI:"TBA có công khai giá trên website không?", aEN:"No. Pricing depends on goals, timeline, target countries, and level of support. Book a free consultation so we can recommend the most suitable plan.", aVI:"Không. Chi phí phụ thuộc vào mục tiêu, timeline, quốc gia apply và mức độ hỗ trợ. Bạn có thể đặt lịch tư vấn miễn phí để TBA đề xuất hướng phù hợp."},
  { qEN:"Who is TBA for?", qVI:"TBA phù hợp với ai?", aEN:"High school students and families who want clearer direction for Canada/US applications, scholarships, essays, activities, and profile building.", aVI:"Học sinh và phụ huynh muốn có định hướng rõ hơn cho hồ sơ Canada/US, học bổng, bài luận, hoạt động và xây dựng profile."},
  { qEN:"Can I work with TBA in Vietnamese?", qVI:"Có thể làm việc với TBA bằng tiếng Việt không?", aEN:"Yes. TBA supports students and families in both English and Vietnamese.", aVI:"Có. TBA hỗ trợ học sinh và phụ huynh bằng cả tiếng Anh và tiếng Việt."},
  { qEN:"Do you guarantee admissions or scholarships?", qVI:"TBA có cam kết đậu trường/học bổng không?", aEN:"No ethical mentorship service can guarantee admission. We focus on strategy, authentic storytelling, and stronger execution.", aVI:"Không dịch vụ mentor uy tín nào có thể cam kết chắc chắn đậu. TBA tập trung vào chiến lược, storytelling thật và cách triển khai hồ sơ tốt hơn."}
];
