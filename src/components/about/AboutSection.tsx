"use client"
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>ASP.Net</li>
          <li>Java</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>...</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          {/* <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li> */}
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          {/* <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li> */}
        </ul>
      ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

    return (
        <section className="text-white mx-auto px-12 py-4 mt-24" id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image 
                    src="/images/work-space.png"
                    alt="WorkSpace image"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="lg:text-3xl text-2xl font-bold mb-4">
                        Một chút về tôi
                    </h2>
                    <p className="lg:text-sm sm:text-sm text-xs">
                        Tôi là một lập trình viên web với nhiều niềm đam mê và sáng tạo. 
                        Tôi có kinh nghiệm làm việc với Java, Spring Framework, Java Fx, Asp.net,
                        HTML, CSS, JavaScript, React, Redux, NextJs, MongoDb, PostgreSQL, MySQL,
                        Flutter, SQLite, Git, Docker, và một chút về Unbutu Linux. Tôi là người nhanh tiếp thu và luôn luôn mong muốn 
                        mở rộng kiến thức của mình. Tôi có một nhóm làm việc cùng nhau, chúng tôi
                        đang cùng nhau tạo ra nhiều ứng dụng tuyệt với và tôi rất vui về điều đó.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                            >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                            >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                            >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                      {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
