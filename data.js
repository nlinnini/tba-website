/* =========================================================
   THE BANANA APPLICATIONS — EASY EDIT FILE
   No folders needed. Upload all files to GitHub root.
   ========================================================= */

const BOOKING_LINK = "https://calendly.com/thebananaapplication/30min";
const INSTAGRAM_LINK = "https://www.instagram.com/thebananaapplications";
const FACEBOOK_LINK = "https://www.facebook.com/TheBananaApplications";
const EMAIL = "thebananaapplication@gmail.com";

const DESTINATIONS = [
  {
    name: "New York University",
    logo: "NYU.png",
    scale: 1
  },
  {
    name: "Rice University",
    logo: "Rice University.png",
    scale: 1
  },
  {
    name: "University of Alberta",
    logo: "UAlberta.png",
    scale: 1
  },
  {
    name: "University of British Columbia",
    logo: "UBC.png",
    scale: 1
  },
  {
    name: "University of Calgary",
    logo: "UCalgary.png",
    scale: 1
  },
  {
    name: "University of Connecticut",
    logo: "UConn.png",
    scale: 1
  },
  {
    name: "University of Illinois Urbana-Champaign",
    logo: "UIllinois.png",
    scale: 1
  },
  {
    name: "University of Massachusetts",
    logo: "UMass.png",
    scale: 1
  },
  {
    name: "University of Michigan",
    logo: "UMichigan.png",
    scale: 1
  },
  {
    name: "University of Toronto",
    logo: "UToronto.png",
    scale: 1
  }
];

const RESULTS = [
  {
    id: "pratt-architecture-scholarship",
    category: "USA · Undergraduate",
    image: "2.png",
    schoolEN: "Pratt Institute",
    schoolVI: "Pratt Institute",
    outcomeEN: "Admitted to Bachelor of Architecture",
    outcomeVI: "Trúng tuyển Bachelor of Architecture",
    highlightEN: "$100,000 International Merit Scholarship",
    highlightVI: "Học bổng International Merit ≈ 2,63 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Architecture & Design",
    metaVI: "Mỹ · Đại học · Kiến trúc & Thiết kế",
    supportEN: "TBA supported portfolio positioning, application storytelling, and final application strategy.",
    supportVI: "TBA hỗ trợ định vị portfolio, storytelling hồ sơ và chiến lược hoàn thiện application.",
    noteEN: "Personal information is blurred for privacy.",
    noteVI: "Thông tin cá nhân đã được che để bảo mật.",
    tags: ["USA", "Undergraduate", "Scholarship", "Architecture", "$100K"]
  },
  {
    id: "rice-ed-admission",
    category: "USA · Undergraduate",
    image: "1.png",
    schoolEN: "Rice University",
    schoolVI: "Rice University",
    outcomeEN: "Early Decision acceptance",
    outcomeVI: "Trúng tuyển Early Decision",
    highlightEN: "Two TBA mentees admitted",
    highlightVI: "Hai mentee của TBA được nhận",
    metaEN: "United States · Undergraduate · Ranking: #17 National Universities",
    metaVI: "Mỹ · Đại học · Ranking: #17 National Universities",
    supportEN: "TBA helped with essay direction, activities positioning, school fit, and application strategy.",
    supportVI: "TBA hỗ trợ định hướng bài luận, cách trình bày hoạt động, school fit và chiến lược apply.",
    noteEN: "Screenshots are anonymized and used as representative proof of outcomes.",
    noteVI: "Ảnh đã được ẩn danh và dùng làm minh chứng thành tích đại diện.",
    tags: ["USA", "Undergraduate", "Admission", "ED", "Top University"]
  },
  {
    id: "uwc-full-scholarship",
    category: "Global · High School",
    image: "result-uwc-full-scholarship.png",
    schoolEN: "UWC Changshu China",
    schoolVI: "UWC Changshu China",
    outcomeEN: "Full scholarship nomination",
    outcomeVI: "Đề cử học bổng toàn phần",
    highlightEN: "100% tuition + living support",
    highlightVI: "100% học phí + hỗ trợ chi phí sinh hoạt",
    metaEN: "Global · High School · Acceptance rate <5%",
    metaVI: "Global · Bậc high school · Acceptance rate <5%",
    supportEN: "TBA supported profile positioning, application storytelling, interview preparation, and final-round strategy.",
    supportVI: "TBA hỗ trợ định vị profile, storytelling cho hồ sơ, chuẩn bị phỏng vấn và chiến lược vòng cuối.",
    noteEN: "Personal information is blurred for privacy.",
    noteVI: "Thông tin cá nhân đã được che để bảo mật.",
    tags: ["High School", "Scholarship", "Interview", "Full Ride"]
  },
  {
    id: "minnesota-design-admission",
    category: "USA · Undergraduate",
    image: "result-minnesota-design.png",
    schoolEN: "University of Minnesota Twin Cities",
    schoolVI: "University of Minnesota Twin Cities",
    outcomeEN: "Admitted to College of Design",
    outcomeVI: "Trúng tuyển College of Design",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: #54 National Universities / #23 Top Public Schools",
    metaVI: "Mỹ · Đại học · Ranking: #54 National Universities / #23 Top Public Schools",
    supportEN: "TBA supported application positioning and school-specific strategy.",
    supportVI: "TBA hỗ trợ định vị hồ sơ và chiến lược apply theo trường.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission", "Design"]
  },
  {
    id: "oregon-apex-scholarship",
    category: "USA · Undergraduate",
    image: "result-oregon-apex.png",
    schoolEN: "University of Oregon",
    schoolVI: "University of Oregon",
    outcomeEN: "Admitted to University of Oregon",
    outcomeVI: "Trúng tuyển University of Oregon",
    highlightEN: "$40,000 Apex Scholarship",
    highlightVI: "Học bổng Apex ≈ 1,05 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application strategy, profile positioning, and scholarship-facing presentation.",
    supportVI: "TBA hỗ trợ chiến lược hồ sơ, định vị profile và cách thể hiện hồ sơ hướng tới học bổng.",
    noteEN: "Scholarship amount is shown directly on the admission letter.",
    noteVI: "Số tiền học bổng được ghi trực tiếp trong thư nhận.",
    tags: ["USA", "Undergraduate", "Scholarship", "$40K"]
  },
  {
    id: "unc-charlotte-admission",
    category: "USA · Undergraduate",
    image: "result-unc-charlotte.png",
    schoolEN: "UNC Charlotte",
    schoolVI: "UNC Charlotte",
    outcomeEN: "Admitted for Fall 2025",
    outcomeVI: "Trúng tuyển kỳ Fall 2025",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application planning and submission strategy.",
    supportVI: "TBA hỗ trợ kế hoạch apply và chiến lược nộp hồ sơ.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission"]
  },
  {
    id: "idaho-architecture-scholarship",
    category: "USA · Undergraduate",
    image: "result-idaho-architecture.png",
    schoolEN: "University of Idaho",
    schoolVI: "University of Idaho",
    outcomeEN: "Admitted to Architecture",
    outcomeVI: "Trúng tuyển ngành Architecture",
    highlightEN: "$15,858/year Invitation to Idaho Scholarship",
    highlightVI: "Học bổng Invitation to Idaho ≈ 417 triệu VNĐ/năm",
    metaEN: "United States · Undergraduate · Ranking: National University / #100 Top Public Schools",
    metaVI: "Mỹ · Đại học · Ranking: National University / #100 Top Public Schools",
    supportEN: "TBA supported application positioning and scholarship-facing strategy.",
    supportVI: "TBA hỗ trợ định vị hồ sơ và chiến lược thể hiện hồ sơ hướng tới học bổng.",
    noteEN: "The scholarship is listed as an annual award in the admission letter.",
    noteVI: "Thư nhận ghi học bổng theo năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "Architecture"]
  },
  {
    id: "depauw-distinguished-scholarship",
    category: "USA · Undergraduate",
    image: "result-depauw-distinguished.png",
    schoolEN: "DePauw University",
    schoolVI: "DePauw University",
    outcomeEN: "Admitted with major merit and grant aid",
    outcomeVI: "Trúng tuyển kèm học bổng và grant lớn",
    highlightEN: "$120,000 DePauw Distinguished Scholarship + $55,345 total annual grants",
    highlightVI: "DePauw Distinguished Scholarship ≈ 3,16 tỷ VNĐ + tổng grant năm đầu ≈ 1,46 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported essay direction, application packaging, and scholarship positioning.",
    supportVI: "TBA hỗ trợ định hướng luận, đóng gói hồ sơ và chiến lược học bổng.",
    noteEN: "The letter shows DePauw Distinguished Scholarship and additional grants.",
    noteVI: "Thư nhận ghi DePauw Distinguished Scholarship và các grant bổ sung.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid", "$120K+"]
  },
  {
    id: "lawrence-founders-scholarship",
    category: "USA · Undergraduate",
    image: "result-lawrence-founders.png",
    schoolEN: "Lawrence University",
    schoolVI: "Lawrence University",
    outcomeEN: "Admitted with Founders Scholarship",
    outcomeVI: "Trúng tuyển kèm Founders Scholarship",
    highlightEN: "$120,000 Lawrence University Founders Scholarship + $51,195 total annual gift aid",
    highlightVI: "Founders Scholarship ≈ 3,16 tỷ VNĐ + tổng gift aid năm đầu ≈ 1,35 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application storytelling, profile framing, and scholarship strategy.",
    supportVI: "TBA hỗ trợ storytelling hồ sơ, định vị profile và chiến lược học bổng.",
    noteEN: "The aid table includes scholarship and grant aid.",
    noteVI: "Bảng aid bao gồm học bổng và grant.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid", "$120K+"]
  },
  {
    id: "earlham-deans-scholarship",
    category: "USA · Undergraduate",
    image: "result-earlham-deans.png",
    schoolEN: "Earlham College",
    schoolVI: "Earlham College",
    outcomeEN: "Admitted with Deans Scholarship",
    outcomeVI: "Trúng tuyển kèm Deans Scholarship",
    highlightEN: "$144,000 Deans Scholarship",
    highlightVI: "Deans Scholarship ≈ 3,79 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application strategy and scholarship-facing profile presentation.",
    supportVI: "TBA hỗ trợ chiến lược apply và cách thể hiện profile hướng tới học bổng.",
    noteEN: "Scholarship amount is listed as $36,000 per year for four years.",
    noteVI: "Thư nhận ghi $36,000/năm trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$144K"]
  },
  {
    id: "hws-elizabeth-blackwell-scholarship",
    category: "USA · Undergraduate",
    image: "result-hws-blackwell.png",
    schoolEN: "Hobart and William Smith Colleges",
    schoolVI: "Hobart and William Smith Colleges",
    outcomeEN: "Admitted with Elizabeth Blackwell '49 Scholarship",
    outcomeVI: "Trúng tuyển kèm Elizabeth Blackwell '49 Scholarship",
    highlightEN: "$34,000/year scholarship + $76,143 total annual grants",
    highlightVI: "Học bổng $34,000/năm ≈ 894 triệu VNĐ/năm + tổng grant năm đầu ≈ 2,00 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts Colleges",
    metaVI: "Mỹ · Đại học · Liberal Arts Colleges",
    supportEN: "TBA supported profile strategy, school fit positioning, and application presentation.",
    supportVI: "TBA hỗ trợ chiến lược profile, định vị school fit và cách trình bày hồ sơ.",
    noteEN: "Aid table shows scholarship, institutional grant, and federal grants.",
    noteVI: "Bảng aid thể hiện học bổng, institutional grant và federal grants.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid"]
  },
  {
    id: "knox-provost-scholarship",
    category: "USA · Undergraduate",
    image: "result-knox-provost.png",
    schoolEN: "Knox College",
    schoolVI: "Knox College",
    outcomeEN: "Admitted with Provost Scholarship",
    outcomeVI: "Trúng tuyển kèm Provost Scholarship",
    highlightEN: "$40,000/year Provost Scholarship + $58,689 total grants",
    highlightVI: "Provost Scholarship ≈ 1,05 tỷ VNĐ/năm + tổng grant năm đầu ≈ 1,54 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application storytelling and scholarship positioning.",
    supportVI: "TBA hỗ trợ storytelling hồ sơ và chiến lược học bổng.",
    noteEN: "Aid table includes Knox Provost Scholarship and additional grants.",
    noteVI: "Bảng aid bao gồm Knox Provost Scholarship và các grant khác.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid"]
  },
  {
    id: "austin-college-academic-excellence",
    category: "USA · Undergraduate",
    image: "result-austin-college-aid.png",
    schoolEN: "Austin College",
    schoolVI: "Austin College",
    outcomeEN: "Admitted with Academic Excellence Scholarship",
    outcomeVI: "Trúng tuyển kèm Academic Excellence Scholarship",
    highlightEN: "$112,000 Academic Excellence Scholarship + $44,905 gift aid total",
    highlightVI: "Academic Excellence Scholarship ≈ 2,95 tỷ VNĐ + tổng gift aid ≈ 1,18 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported profile positioning and application strategy.",
    supportVI: "TBA hỗ trợ định vị profile và chiến lược apply.",
    noteEN: "The award letter lists $28,000/year for a total value of $112,000.",
    noteVI: "Thư nhận ghi $28,000/năm, tổng $112,000.",
    tags: ["USA", "Undergraduate", "Scholarship", "$112K"]
  },
  {
    id: "juniata-calvert-ellis-scholarship",
    category: "USA · Undergraduate",
    image: "result-juniata-calvert-ellis.png",
    schoolEN: "Juniata College",
    schoolVI: "Juniata College",
    outcomeEN: "Admitted with Calvert Ellis Scholarship",
    outcomeVI: "Trúng tuyển kèm Calvert Ellis Scholarship",
    highlightEN: "$152,000 Calvert Ellis Scholarship",
    highlightVI: "Calvert Ellis Scholarship ≈ 4,00 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application storytelling, profile strategy, and scholarship positioning.",
    supportVI: "TBA hỗ trợ storytelling hồ sơ, chiến lược profile và định vị học bổng.",
    noteEN: "The letter lists $38,000 per year, totaling $152,000 over four years.",
    noteVI: "Thư nhận ghi $38,000/năm, tổng $152,000 trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$152K"]
  },
  {
    id: "hanover-founders-scholarship",
    category: "USA · Undergraduate",
    image: "result-hanover-founders.png",
    schoolEN: "Hanover College",
    schoolVI: "Hanover College",
    outcomeEN: "Admitted with Founder's Scholarship",
    outcomeVI: "Trúng tuyển kèm Founder's Scholarship",
    highlightEN: "$26,000/year Founder's Scholarship",
    highlightVI: "Founder's Scholarship ≈ 684 triệu VNĐ/năm",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application strategy and profile presentation.",
    supportVI: "TBA hỗ trợ chiến lược apply và cách trình bày profile.",
    noteEN: "Scholarship is listed as an annual merit award.",
    noteVI: "Học bổng được ghi theo năm trong thư nhận.",
    tags: ["USA", "Undergraduate", "Scholarship"]
  },
  {
    id: "houston-aes-scholarship",
    category: "USA · Undergraduate",
    image: "result-houston-aes.png",
    schoolEN: "University of Houston",
    schoolVI: "University of Houston",
    outcomeEN: "Awarded Academic Excellence Scholarship",
    outcomeVI: "Nhận Academic Excellence Scholarship",
    highlightEN: "$16,000 Academic Excellence Scholarship",
    highlightVI: "Academic Excellence Scholarship ≈ 421 triệu VNĐ",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application positioning and scholarship-oriented presentation.",
    supportVI: "TBA hỗ trợ định vị hồ sơ và cách thể hiện hồ sơ hướng tới học bổng.",
    noteEN: "The scholarship is listed as $4,000 per year over four years.",
    noteVI: "Học bổng được ghi $4,000/năm trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$16K"]
  },
  {
    id: "rit-scholarship",
    category: "USA · Undergraduate",
    image: "result-rit-scholarship.png",
    schoolEN: "Rochester Institute of Technology",
    schoolVI: "Rochester Institute of Technology",
    outcomeEN: "Admitted with scholarship",
    outcomeVI: "Trúng tuyển kèm học bổng",
    highlightEN: "$100,000 scholarship for international students",
    highlightVI: "Học bổng cho sinh viên quốc tế ≈ 2,63 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application planning and scholarship-facing strategy.",
    supportVI: "TBA hỗ trợ kế hoạch apply và chiến lược thể hiện hồ sơ hướng tới học bổng.",
    noteEN: "The letter lists $25,000 per year, up to $100,000 over the undergraduate program.",
    noteVI: "Thư nhận ghi $25,000/năm, tối đa $100,000 cho chương trình đại học.",
    tags: ["USA", "Undergraduate", "Scholarship", "$100K"]
  },
  {
    id: "iowa-state-presidential-award",
    category: "USA · Undergraduate",
    image: "result-iowa-state-presidential.png",
    schoolEN: "Iowa State University",
    schoolVI: "Iowa State University",
    outcomeEN: "Awarded President's Award for International Student Excellence",
    outcomeVI: "Nhận President's Award for International Student Excellence",
    highlightEN: "$48,000 scholarship",
    highlightVI: "Học bổng ≈ 1,26 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application positioning and scholarship presentation.",
    supportVI: "TBA hỗ trợ định vị hồ sơ và cách trình bày hồ sơ học bổng.",
    noteEN: "The scholarship is listed as $12,000/year for four years.",
    noteVI: "Học bổng được ghi $12,000/năm trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$48K"]
  },
  {
    id: "augustana-presidential-scholarship",
    category: "USA · Undergraduate",
    image: "result-augustana-aid.png",
    schoolEN: "Augustana College",
    schoolVI: "Augustana College",
    outcomeEN: "Admitted with Presidential Scholarship and additional awards",
    outcomeVI: "Trúng tuyển kèm Presidential Scholarship và các award khác",
    highlightEN: "$42,208/year listed awards, including $31,000 Presidential Scholarship",
    highlightVI: "Award được ghi ≈ 1,11 tỷ VNĐ/năm, gồm Presidential Scholarship $31,000/năm",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported profile strategy and scholarship positioning.",
    supportVI: "TBA hỗ trợ chiến lược profile và định vị học bổng.",
    noteEN: "The letter lists merit, grant, meal plan, housing, and work-study information.",
    noteVI: "Thư nhận ghi merit award, grant, meal plan, housing và work-study.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid"]
  },
  {
    id: "beloit-presidential-scholarship",
    category: "USA · Undergraduate",
    image: "result-beloit-presidential.png",
    schoolEN: "Beloit College",
    schoolVI: "Beloit College",
    outcomeEN: "Admitted with Presidential Scholarship",
    outcomeVI: "Trúng tuyển kèm Presidential Scholarship",
    highlightEN: "$176,000 Presidential Scholarship",
    highlightVI: "Presidential Scholarship ≈ 4,63 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application storytelling and scholarship positioning.",
    supportVI: "TBA hỗ trợ storytelling hồ sơ và chiến lược học bổng.",
    noteEN: "The letter lists $44,000 annually for a total of $176,000.",
    noteVI: "Thư nhận ghi $44,000/năm, tổng $176,000.",
    tags: ["USA", "Undergraduate", "Scholarship", "$176K"]
  },
  {
    id: "depaul-global-scholarship",
    category: "USA · Undergraduate",
    image: "result-depaul-global.png",
    schoolEN: "DePaul University",
    schoolVI: "DePaul University",
    outcomeEN: "Admitted with Global DePaul Scholarship",
    outcomeVI: "Trúng tuyển kèm Global DePaul Scholarship",
    highlightEN: "$116,000 Global DePaul Scholarship",
    highlightVI: "Global DePaul Scholarship ≈ 3,05 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application presentation and scholarship strategy.",
    supportVI: "TBA hỗ trợ cách trình bày hồ sơ và chiến lược học bổng.",
    noteEN: "The scholarship is listed as $29,000/year, renewable for four years.",
    noteVI: "Thư nhận ghi $29,000/năm, gia hạn trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$116K"]
  },
  {
    id: "depauw-presidential-award",
    category: "USA · Undergraduate",
    image: "result-depauw-presidential.png",
    schoolEN: "DePauw University",
    schoolVI: "DePauw University",
    outcomeEN: "Admitted with Presidential Award of Excellence",
    outcomeVI: "Trúng tuyển kèm Presidential Award of Excellence",
    highlightEN: "$176,000 Presidential Award of Excellence",
    highlightVI: "Presidential Award of Excellence ≈ 4,63 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application storytelling, leadership positioning, and scholarship strategy.",
    supportVI: "TBA hỗ trợ storytelling hồ sơ, định vị leadership và chiến lược học bổng.",
    noteEN: "The letter lists $44,000/year for up to four years.",
    noteVI: "Thư nhận ghi $44,000/năm trong tối đa 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$176K"]
  },
  {
    id: "upei-biology-admission",
    category: "Canada · Undergraduate",
    image: "result-upei-biology.png",
    schoolEN: "University of Prince Edward Island",
    schoolVI: "University of Prince Edward Island",
    outcomeEN: "Admitted to Bachelor of Science in Biology",
    outcomeVI: "Trúng tuyển Bachelor of Science in Biology",
    highlightEN: "Admission to Biology, specialization in Environmental Biology",
    highlightVI: "Trúng tuyển Biology, specialization in Environmental Biology",
    metaEN: "Canada · Undergraduate",
    metaVI: "Canada · Đại học",
    supportEN: "TBA supported application planning and program positioning.",
    supportVI: "TBA hỗ trợ kế hoạch apply và định vị ngành học.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["Canada", "Undergraduate", "Admission", "Biology"]
  },
  {
    id: "ut-dallas-biochemistry-admission",
    category: "USA · Undergraduate",
    image: "result-ut-dallas-biochemistry.png",
    schoolEN: "University of Texas at Dallas",
    schoolVI: "University of Texas at Dallas",
    outcomeEN: "Admitted to B.S. in Biochemistry",
    outcomeVI: "Trúng tuyển B.S. in Biochemistry",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application strategy and program positioning.",
    supportVI: "TBA hỗ trợ chiến lược apply và định vị ngành học.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission", "Biochemistry"]
  },
  {
    id: "nyu-liberal-studies-admission",
    category: "USA · Undergraduate",
    image: "result-nyu-liberal-studies.png",
    schoolEN: "New York University",
    schoolVI: "New York University",
    outcomeEN: "Admitted to Liberal Studies Core",
    outcomeVI: "Trúng tuyển Liberal Studies Core",
    highlightEN: "NYU Class of 2029 admission",
    highlightVI: "Trúng tuyển NYU Class of 2029",
    metaEN: "United States · Undergraduate · Ranking: Top U.S. National University",
    metaVI: "Mỹ · Đại học · Ranking: Top U.S. National University",
    supportEN: "TBA supported application strategy, story positioning, and school-fit presentation.",
    supportVI: "TBA hỗ trợ chiến lược apply, định vị câu chuyện cá nhân và cách thể hiện school fit.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission", "Top University"]
  },
  {
    id: "uiuc-admission",
    category: "USA · Undergraduate",
    image: "result-uiuc-admission.png",
    schoolEN: "University of Illinois Urbana-Champaign",
    schoolVI: "University of Illinois Urbana-Champaign",
    outcomeEN: "Admitted to UIUC",
    outcomeVI: "Trúng tuyển UIUC",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: Top U.S. National University / Top Public University",
    metaVI: "Mỹ · Đại học · Ranking: Top U.S. National University / Top Public University",
    supportEN: "TBA supported application positioning and major-fit strategy.",
    supportVI: "TBA hỗ trợ định vị hồ sơ và chiến lược ngành học.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission", "Top Public"]
  },
  {
    id: "alabama-admission",
    category: "USA · Undergraduate",
    image: "result-alabama-admission.png",
    schoolEN: "The University of Alabama",
    schoolVI: "The University of Alabama",
    outcomeEN: "Admitted for Fall 2025",
    outcomeVI: "Trúng tuyển kỳ Fall 2025",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application strategy and submission planning.",
    supportVI: "TBA hỗ trợ chiến lược apply và kế hoạch nộp hồ sơ.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission"]
  },
  {
    id: "south-florida-admission",
    category: "USA · Undergraduate",
    image: "result-usf-admission.png",
    schoolEN: "University of South Florida",
    schoolVI: "University of South Florida",
    outcomeEN: "Admitted to University of South Florida",
    outcomeVI: "Trúng tuyển University of South Florida",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: National University",
    metaVI: "Mỹ · Đại học · Ranking: National University",
    supportEN: "TBA supported application planning and school-fit positioning.",
    supportVI: "TBA hỗ trợ kế hoạch apply và định vị school fit.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission"]
  },
  {
    id: "minnesota-global-excellence",
    category: "USA · Undergraduate",
    image: "result-minnesota-global-excellence.png",
    schoolEN: "University of Minnesota Twin Cities",
    schoolVI: "University of Minnesota Twin Cities",
    outcomeEN: "Awarded Global Excellence Scholarship",
    outcomeVI: "Nhận Global Excellence Scholarship",
    highlightEN: "$40,000 Global Excellence Scholarship",
    highlightVI: "Global Excellence Scholarship ≈ 1,05 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Ranking: #54 National Universities / #23 Top Public Schools",
    metaVI: "Mỹ · Đại học · Ranking: #54 National Universities / #23 Top Public Schools",
    supportEN: "TBA supported scholarship-facing application strategy.",
    supportVI: "TBA hỗ trợ chiến lược hồ sơ hướng tới học bổng.",
    noteEN: "The letter shows $10,000/year for four years.",
    noteVI: "Thư nhận ghi $10,000/năm trong 4 năm.",
    tags: ["USA", "Undergraduate", "Scholarship", "$40K"]
  },
  {
    id: "dickinson-presidential-scholarship",
    category: "USA · Undergraduate",
    image: "result-dickinson-presidential.png",
    schoolEN: "Dickinson College",
    schoolVI: "Dickinson College",
    outcomeEN: "Awarded Presidential Scholarship and international grant",
    outcomeVI: "Nhận Presidential Scholarship và international grant",
    highlightEN: "$47,770 total grants/scholarship resources",
    highlightVI: "Tổng scholarship/grant ≈ 1,26 tỷ VNĐ",
    metaEN: "United States · Undergraduate · Liberal Arts College",
    metaVI: "Mỹ · Đại học · Liberal Arts College",
    supportEN: "TBA supported application presentation and scholarship strategy.",
    supportVI: "TBA hỗ trợ cách trình bày hồ sơ và chiến lược học bổng.",
    noteEN: "The award table lists Presidential Scholarship and Dickinson International Student Grant.",
    noteVI: "Bảng award ghi Presidential Scholarship và Dickinson International Student Grant.",
    tags: ["USA", "Undergraduate", "Scholarship", "Financial Aid"]
  },
  {
    id: "stony-brook-engineering-admission",
    category: "USA · Undergraduate",
    image: "result-stony-brook-engineering.png",
    schoolEN: "Stony Brook University",
    schoolVI: "Stony Brook University",
    outcomeEN: "Admitted to Chemical & Molecular Engineering",
    outcomeVI: "Trúng tuyển Chemical & Molecular Engineering",
    highlightEN: "Undergraduate admission",
    highlightVI: "Trúng tuyển đại học",
    metaEN: "United States · Undergraduate · Ranking: National University / Top Public University",
    metaVI: "Mỹ · Đại học · Ranking: National University / Top Public University",
    supportEN: "TBA supported STEM application positioning and school-fit strategy.",
    supportVI: "TBA hỗ trợ định vị hồ sơ STEM và chiến lược school fit.",
    noteEN: "Admission proof is privacy-protected.",
    noteVI: "Minh chứng trúng tuyển đã được che thông tin cá nhân.",
    tags: ["USA", "Undergraduate", "Admission", "Engineering", "STEM"]
  }
];

const SERVICES = [
  {
    icon: "✦",
    titleEN: "Profile Strategy",
    titleVI: "Định hướng profile",
    descEN: "Diagnose strengths, gaps, application themes, target countries, and positioning.",
    descVI: "Phân tích điểm mạnh, điểm yếu, theme hồ sơ, quốc gia mục tiêu và định vị profile.",
    deliverEN: ["Profile diagnosis", "Theme & positioning", "Priority roadmap"],
    deliverVI: ["Phân tích profile", "Theme & định vị", "Lộ trình ưu tiên"]
  },
  {
    icon: "✍",
    titleEN: "Essay & Storytelling",
    titleVI: "Luận & storytelling",
    descEN: "Turn lived experience into essays with clear voice, structure, and purpose.",
    descVI: "Biến trải nghiệm cá nhân thành bài luận có voice thật, cấu trúc rõ và mục đích thuyết phục.",
    deliverEN: ["Brainstorming", "Outline review", "Draft feedback"],
    deliverVI: ["Brainstorm ý tưởng", "Sửa outline", "Feedback bản nháp"]
  },
  {
    icon: "◈",
    titleEN: "Scholarship Planning",
    titleVI: "Chiến lược học bổng",
    descEN: "Shortlist scholarships, review eligibility, and plan essays around fit.",
    descVI: "Lọc học bổng phù hợp, kiểm tra điều kiện và lên chiến lược bài luận.",
    deliverEN: ["Scholarship list", "Deadline tracker", "Essay strategy"],
    deliverVI: ["Danh sách học bổng", "Tracker deadline", "Chiến lược luận"]
  },
  {
    icon: "☀",
    titleEN: "Summer Programs",
    titleVI: "Chương trình hè",
    descEN: "Find selective programs and academic opportunities that support the student’s story.",
    descVI: "Tìm chương trình hè và cơ hội học thuật phù hợp với câu chuyện của học sinh.",
    deliverEN: ["Program shortlist", "Fit notes", "Application timeline"],
    deliverVI: ["Danh sách chương trình", "Ghi chú độ fit", "Timeline apply"]
  },
  {
    icon: "♛",
    titleEN: "Competitions & Projects",
    titleVI: "Cuộc thi & dự án",
    descEN: "Build credible outcomes through competitions, passion projects, research, and impact work.",
    descVI: "Xây dựng thành tích thuyết phục qua cuộc thi, passion project, research và impact work.",
    deliverEN: ["Opportunity map", "Project direction", "Impact wording"],
    deliverVI: ["Bản đồ cơ hội", "Định hướng project", "Cách viết impact"]
  },
  {
    icon: "→",
    titleEN: "Canada/US Applications",
    titleVI: "Apply Canada/US",
    descEN: "Plan school lists, portals, documents, deadlines, scholarships, and application priorities.",
    descVI: "Lên school list, portal, giấy tờ, deadline, học bổng và thứ tự ưu tiên khi apply.",
    deliverEN: ["School list", "Application tracker", "Final checklist"],
    deliverVI: ["School list", "Tracker hồ sơ", "Checklist cuối"]
  }
];

const PROCESS = [
  {
    n: "01",
    titleEN: "Free Consultation",
    titleVI: "Tư vấn miễn phí",
    bodyEN: "A first call to understand goals, timeline, target countries, budget sensitivity, and the student’s current profile.",
    bodyVI: "Buổi call đầu tiên để hiểu mục tiêu, timeline, quốc gia apply, mức độ hỗ trợ cần thiết và profile hiện tại.",
    outputEN: "Initial direction + recommended next step",
    outputVI: "Định hướng ban đầu + bước tiếp theo phù hợp"
  },
  {
    n: "02",
    titleEN: "Discovery & Diagnosis",
    titleVI: "Phân tích profile",
    bodyEN: "We identify strengths, gaps, personality, interests, constraints, and the application story that can anchor the strategy.",
    bodyVI: "TBA tìm điểm mạnh, điểm yếu, tính cách, sở thích, giới hạn và câu chuyện hồ sơ có thể làm nền tảng chiến lược.",
    outputEN: "Profile audit + strategic theme",
    outputVI: "Audit profile + theme chiến lược"
  },
  {
    n: "03",
    titleEN: "Personalized Roadmap",
    titleVI: "Lộ trình cá nhân hoá",
    bodyEN: "Mentors support profile-building through extracurriculars, passion projects, research opportunities, competitions, summer programs, and milestones.",
    bodyVI: "Mentor đồng hành xây dựng profile qua hoạt động ngoại khoá, passion project, research project, cuộc thi, chương trình hè và milestone cụ thể.",
    outputEN: "Roadmap + monthly execution priorities",
    outputVI: "Lộ trình + ưu tiên thực hiện từng tháng"
  },
  {
    n: "04",
    titleEN: "Application Sprint",
    titleVI: "Giai đoạn hoàn thiện hồ sơ",
    bodyEN: "We finalize school lists, scholarship targets, essay ideas, revisions, activities list, resume, documents, and submission readiness.",
    bodyVI: "TBA cùng học sinh finalize list trường, học bổng, ý tưởng luận, sửa luận, activities list, resume, giấy tờ và chuẩn bị nộp hồ sơ.",
    outputEN: "Complete application package",
    outputVI: "Bộ hồ sơ hoàn chỉnh để nộp"
  }
];

const FAQS = [
  {
    qEN: "Do you publish pricing on the website?",
    qVI: "TBA có công khai giá trên website không?",
    aEN: "No. Pricing depends on goals, timeline, target countries, and level of support. Book a free consultation so we can recommend the most suitable plan.",
    aVI: "Không. Chi phí phụ thuộc vào mục tiêu, timeline, quốc gia apply và mức độ hỗ trợ. Bạn có thể đặt lịch tư vấn miễn phí để TBA đề xuất hướng phù hợp."
  },
  {
    qEN: "Who is TBA for?",
    qVI: "TBA phù hợp với ai?",
    aEN: "High school students and families who want clearer direction for Canada/US applications, scholarships, essays, activities, and profile building.",
    aVI: "Học sinh và phụ huynh muốn có định hướng rõ hơn cho hồ sơ Canada/US, học bổng, bài luận, hoạt động và xây dựng profile."
  },
  {
    qEN: "Can I work with TBA in Vietnamese?",
    qVI: "Có thể làm việc với TBA bằng tiếng Việt không?",
    aEN: "Yes. TBA supports students and families in both English and Vietnamese.",
    aVI: "Có. TBA hỗ trợ học sinh và phụ huynh bằng cả tiếng Anh và tiếng Việt."
  },
  {
    qEN: "Do you guarantee admissions or scholarships?",
    qVI: "TBA có cam kết đậu trường/học bổng không?",
    aEN: "No ethical mentorship service can guarantee admission. We focus on strategy, authentic storytelling, and stronger execution.",
    aVI: "Không dịch vụ mentor uy tín nào có thể cam kết chắc chắn đậu. TBA tập trung vào chiến lược, storytelling thật và cách triển khai hồ sơ tốt hơn."
  }
];

/* =========================================================
   SHOP / TEMPLATE STORE
   Vietnamese checkout: Google Form + QR transfer
   English checkout: Payhip
   ========================================================= */

const SHOP_PAYMENT = {
  vi: {
    formLink: "https://forms.gle/Twxg3v2rLxBCtsow9",
    qrImage: "QR.png",
    transferNote: "Nội dung chuyển khoản: TBA + Họ tên + Tên tài liệu"
  }
};

const SHOP_PRODUCTS = [
  {
    id: "interview-materials",
    titleEN: "Interview Question Materials",
    titleVI: "Tài liệu Câu hỏi Phỏng vấn",
    descriptionEN: "A practical interview preparation guide with question frameworks, answer-building guidance, and sample responses for school and scholarship interviews.",
    descriptionVI: "Tài liệu luyện phỏng vấn với khung xây dựng câu trả lời, hướng dẫn trả lời và một số câu trả lời mẫu cho phỏng vấn trường/học bổng.",
    priceEN: "$30 CAD",
    priceVI: "199.000 VND",
    badgeEN: "Interview Prep",
    badgeVI: "Phỏng vấn",
    featuresEN: [
      "Question frameworks",
      "Sample responses",
      "School and scholarship interview prep"
    ],
    featuresVI: [
      "Khung xây dựng câu trả lời",
      "Một số câu trả lời mẫu",
      "Phù hợp phỏng vấn trường/học bổng"
    ],
    payhipUrl: "https://payhip.com/b/bx3Mc"
  },
  {
    id: "resume-materials",
    titleEN: "CV / Resume Materials",
    titleVI: "Tài liệu CV / Resume",
    descriptionEN: "A student-friendly guide to writing stronger CVs and resumes, including structure, sections, example wording, and application-ready formatting tips.",
    descriptionVI: "Hướng dẫn viết CV/Resume cho học sinh, bao gồm bố cục, các mục cần có, ví dụ cách trình bày và tips để dùng cho hồ sơ apply.",
    priceEN: "$30 CAD",
    priceVI: "199.000 VND",
    badgeEN: "Resume/CV",
    badgeVI: "CV/Resume",
    featuresEN: [
      "CV/resume structure",
      "Example wording",
      "Application-ready checklist"
    ],
    featuresVI: [
      "Bố cục CV/resume",
      "Ví dụ cách viết",
      "Checklist trước khi nộp"
    ],
    payhipUrl: "https://payhip.com/b/LVyg4"
  },
  {
    id: "lor-materials",
    titleEN: "Letter of Recommendation Materials",
    titleVI: "Tài liệu Thư Giới thiệu",
    descriptionEN: "A recommendation letter guide covering recommender selection, letter structure, content strategy, evidence-building, and sample letters.",
    descriptionVI: "Hướng dẫn thư giới thiệu gồm cách chọn người viết, bố cục thư, chiến lược nội dung, cách chuẩn bị dẫn chứng và thư mẫu.",
    priceEN: "$30 CAD",
    priceVI: "199.000 VND",
    badgeEN: "Recommendation",
    badgeVI: "Thư giới thiệu",
    featuresEN: [
      "Recommender selection",
      "Letter structure",
      "Sample recommendation letters"
    ],
    featuresVI: [
      "Cách chọn người viết thư",
      "Bố cục thư giới thiệu",
      "Thư giới thiệu mẫu"
    ],
    payhipUrl: "https://payhip.com/b/BKAf9"
  },
  {
    id: "complete-bundle",
    titleEN: "Complete Materials Bundle",
    titleVI: "Combo 3 Tài liệu Apply",
    descriptionEN: "Get all three TBA materials: Interview Questions, CV/Resume, and Letter of Recommendation guides in one bundle.",
    descriptionVI: "Bao gồm cả 3 tài liệu của TBA: Câu hỏi Phỏng vấn, CV/Resume và Thư Giới thiệu trong một combo.",
    priceEN: "$80 CAD",
    priceVI: "500.000 VND",
    badgeEN: "Best Value",
    badgeVI: "Tiết kiệm nhất",
    featuresEN: [
      "Interview Question Materials",
      "CV / Resume Materials",
      "Letter of Recommendation Materials"
    ],
    featuresVI: [
      "Tài liệu Câu hỏi Phỏng vấn",
      "Tài liệu CV / Resume",
      "Tài liệu Thư Giới thiệu"
    ],
    payhipUrl: "https://payhip.com/b/HwTK2"
  }
];
