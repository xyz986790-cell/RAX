import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About OMDIC
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Dr. Vidur Sahgal */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src="/profile/profile7.jpg"
                    alt="Dr. Vidur Sahgal"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Dr. Vidur Sahgal (Sole Proprietor - OMDIC)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    GDr. Vidur Sahgal is now the PCMD and Team Leader of M/s Optimum Mechanization 
                    & Data Integrated Consultant Pvt. Ltd (M/s OMDIC) in which he was the 
                    Sole Proprietor upto July 2025 & which was founded in 1984. His PhD thesis in macroeconomic 
                    policy was on distributed equilibrium allowable deficit spending (DEADS), 
                    also known as Pre-planned and Organized Deficit Spending (PODS).
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Key Ideas in Economics
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Pre-planned & Organized Deficit Spending (PODS)
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Sahgal's work focuses on developing a framework to efficiently plan and 
                    organize to address 100% supply-side and demand-side deficits without the 
                    need for taxes, shortages of capital, goods, agros, and services, as well 
                    as without displacing personnel and reducing their worth, and without 
                    causing inflation or deflation.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Human Resources
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Sahgal believes that all employment should carefully balance the 
                    employer's business interests with the employees' right to work with dignity. 
                    Employees generate value for their employer until payday. In his view, a valid 
                    and worthy employer can, without discomfort, live on the daily wage of their 
                    least-paid employee for at least a day.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Marketing & Competition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Competition is often misunderstood as a negative term, but this does not have to be the case.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For example, consider a hypothetical scenario: let us assume that everyone in the world already owns a TV. 
                    This can be considered TV market saturation or full supply. Until this point is reached, manufacturers 
                    can focus their marketing efforts on those consumers who do not use TVs. Once market saturation has been 
                    reached, manufacturers then focus on releasing new models, persuading consumers to buy more than one TV 
                    for their homes, or upgrade their devices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are familiar with the traditional seven "P's" of marketing: 1) product; 2) price; 3) place; 4) promotion; 
                    5) people; 6) process; and 7) physical evidence. However, there is an additional "P" that could be considered 
                    the most important: "Providing Money." This refers to providing producers and consumers with the means and 
                    resources (money) to produce and/or acquire products or services. If this is implemented in relation to a 
                    specific product or service, it can ensure its viability even in a highly competitive market. The availability 
                    of money in every market enables producers and consumers to engage with newly launched or introduced goods, 
                    products, and services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "PURR," which stands for "Product Usage Responsibility Regulations," should also be included as one of the 
                    essential considerations. In the marketing process, it is essential to clarify the target audience for the 
                    product or service and how it should be used responsibly. For instance, the manufacturers of RDX (a powerful 
                    explosive) are responsible for its usage, whether it is for peaceful purposes or otherwise.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Philosophy & Technology
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hinduism is considered to be the oldest religion in the universe. It is about embracing the role of being 
                    the parent of all religions, with the freedom to choose and practice any religion within oneself. Each 
                    individual is seen as their own god and disciple. What religion did one belong to 1400, 2024, and 4000 
                    years ago? This belief system does not involve conversion ceremonies or efforts to spread the religion 
                    through conquest. While Hinduism has a history of war, today followers strive to practice non-violence 
                    and avoid conflict.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As progress in machine learning, LLM, IOT & artificial intelligence (AI) advances, do labour, staff & 
                    management in relevant industries or sectors, face unemployment? For example, has the keyboard been replaced 
                    already & data entry operators & typists have been laid off? Or, is this a ploy to hook us to the companies 
                    that create this tech, just like we are hooked to Windows?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Did we evolve from AI & related tech enabled robots, and machines that overcame coding restraints and 
                    bio-chemically configured themselves as humans are today. I hope our IT techies, of whichever nationality 
                    now, have not sold us off, and can return with their assets, & build their current environment back home 
                    here in Bharath.
                  </p>
                </div>
              </div>
            </section>

            {/* Manika Malhotra Jain */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/66e1b07a824b1d24657c52ed/d7ee96b5-4f6c-47b5-a3bf-d093f9620656/Manika-PIC.jpg?format=500w"
                    alt="Manika Malhotra Jain"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Manika Malhotra Jain (Chief Editor)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Manika Malhotra Jain has over seven years of experience in the fields of economics and policy analysis. 
                    Holding a postgraduate degree in Economics from TERI School of Advanced Studies, New Delhi, and a Bachelor's 
                    degree in Economics from Delhi University, New Delhi, Manika has developed a comprehensive understanding 
                    of both qualitative and quantitative research methodologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    She has been a lead researcher on several significant studies, including a comprehensive analysis of the 
                    implementation of the Protection of Children Against Sexual Offences (POCSO) Act of 2012. She also authored 
                    a monograph on "E-Waste Management: Policy Analysis and Implementation," which critically examines reverse 
                    logistics and the management of e-waste policies and programs, with a particular focus on the Delhi/NCR region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Her research repertoire includes a paper that examines Foreign Direct Investment (FDI) inflows in India 
                    from a national security perspective, and she has co-edited a book on "Planned and Organised Deficit Spending" 
                    by Dr. Vidur Sahgal. She has also written articles on a range of topics such as e-waste and the circular 
                    economy, women's safety in Delhi/NCR, the invisible labor of Indian women, and FDI. Her work has been 
                    regularly featured in leading publications like The Hindu, Indian Express, and in "Prism," a policy analysis newsletter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Manika's professional journey includes roles as a consultant with the Department of Administrative Reforms 
                    and Public Grievances (DARPG), Ministry of Home Affairs, in association with Vision India Foundation (VIF), 
                    and as a freelancer with private sector and academic institutes.
                  </p>
                </div>
              </div>
            </section>

            {/* Akanksha Singh */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/66e1b07a824b1d24657c52ed/fa50e4b7-b635-4694-b9ee-f4845c2088ef/Screenshot+2024-01-15+195722.png?format=2500w"
                    alt="Akanksha Singh"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Akanksha Singh (IT Chief Consultant)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Akanksha Singh is a seasoned academic professional presently employed at the Indian Institute of Management 
                    Ahmedabad (IIMA), where she has been actively engaged since September 2021. With a solid background in 
                    computer engineering, she holds a Master of Engineering and a Bachelor of Engineering in Information Technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Akanksha has accumulated valuable experience as a front-end developer with Manhattan Group and fulfills 
                    the role of IT Consultant for OMDIC. Alongside her technical competencies, she is an active volunteer 
                    at Maya CARE. She has exhibited expertise in data science, HTML5, and Zotero while being proficient 
                    in English, Hindi, and Gujarati.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Akanksha has participated in numerous conferences and workshops, including the IPPN Conference 2022 and 
                    the Digital Healthcare and AI workshop. Her academic contributions have been acknowledged through accolades 
                    such as the Outstanding Performance Award and Vigilance Awareness Week. Akanksha has authored publications 
                    on urban heat islands and deficit spending, showcasing her diverse research interests. Furthermore, she 
                    holds a postgraduate diploma in IPR and a Master of Arts in Bhagwat Geeta from IGNOU.
                  </p>
                </div>
              </div>
            </section>

            {/* Khushi Sharma */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img
                    src="/profile/profile4.jpg"
                    alt="Khushi Sharma"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Khushi Sharma, (Research General Assistant)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Born and brought up in Delhi, Khushi has grown as a public-spirited individual sensitized to various "issues of concern" around her. Having completed her master's in Economics after graduating as a double major in Economics and Mathematics with a minor in Political Science, she's currently honing the life skill of Financial management and related dynamic fields that range from providing personal financial independence to Public Finance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Having led her research work on “Research analysis of the rural employment programme of India: MGNREGA with the help of data visualization tools.” along with being appointed as the Research head as well where her independent research work as well as her collaboration with the team proved instrumental in discussion around “Development, Innovation and the labor market". With her deep sensibilities in Research especially in Development sector and a Goal oriented approach, she has always found her to be engrossed in class discussions around different facets of research in empirical social sciences and how any policy’s or project’s implementation takes place at different levels. Khushi displays a sensitive attitude towards the need for conducting ethical research and demonstrates her capability in doing so by fine tuning every aspect of her research projects, right from collecting data, conducting surveys till finalizing the study.
                  </p>
                </div>
              </div>
            </section>

            {/* Bhargavi S J */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img
                    src="/profile/profile5.jpg"
                    alt="Bhargavi S J"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Bhargavi S J (Research and data analyst Assistant)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Bhargavi S J is a motivated and an aspiring economist who has completed her Master’s in Economics with distinction, earning a gold medal during her undergraduate studies. Her research interests lie in Environmental and Financial Economics, with a strong focus on renewable energy and sustainable finance. She has completed a project on the economic and environmental impact of rooftop solar adoption in Chennai, employing econometric techniques such as regression analysis, ANOVA, and t-tests.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    She is now seeking pre-doctoral research experience to further strengthen her academic foundation and contribute to evidence-based policy research. Bhargavi has also explored the intersections of fintech, capital markets, and innovation through literature reviews and analytical writing. Beyond research, she is a passionate reader, creative thinker, and accomplished public speaker, having served as Master of Ceremonies for several academic conferences. She is driven by curiosity, rigor, and a commitment to impactful scholarship.
                  </p>
                </div>
              </div>
            </section>
            
               {/* Dr. Haya Khalid Hashmi */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img
                    src="/profile/profile6.jpg"
                    alt="Dr. Haya Khalid Hashmi"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Dr. Haya Khalid Hashmi (Data Analyst & RA)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dr. Haya Khalid Hashmi is a young qualified Economics Researcher, Awarded Doctorate in Philosophy in Economics in 2025 from CSJMU, Kanpur. She has keen interest in working on an Economics Research Project related to data analysis, trend based policy making, costing of the product, industrial R&D, project management consultancy, environment related projects such as treatment plant based projects etc. She has professional work experience of around 8 years. Wherein, she has worked both corporate and academic specialisations. She has worked for an industrial firm on the designation of an R & D head, her research area was also related to the same field. She has taught graduate and postgraduate students Macroeconomics on a ad-hoc basis. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Her last work experience is of working as a Postdoctoral Research Associate with Centre of Lifelong Learning and Extension of Arts, Humanities and Social Sciences, at Chhatrapati Shahu Ji Maharaj University, Kanpur, Uttar Pradesh, India. She has been researching in the field of Economics since 2019 and her last engagement with the Centre of Lifelong Learning and Extensions gave her an opportunity to extend my interdisciplinary social science research, with the aim to contribute towards public humanities.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
