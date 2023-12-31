import React from 'react';
import { isEmpty } from 'lodash';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
const CustomAccordion = ({ syllabus, videoUrl, setVideoUrl }) => {
  const { userId, courseName } = useParams();

  return (
    <>
      {!isEmpty(syllabus) ? (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          {syllabus.map((course, index) => (
            <AccordionItem key={index} className=" ">
              <AccordionItemHeading>
                <AccordionItemButton>{course.topic}</AccordionItemButton>
              </AccordionItemHeading>

              {isEmpty(course.videos) ? (
                <AccordionItemPanel className="py-3 cursor-pointer border-b px-4">
                  <div className="flex items-center gap-x-2 ">
                    <MdOutlineSlowMotionVideo
                      // onClick={() => setRunVideo(true)}
                      className="  text-fuchsia-500 cursor-pointer"
                      size={20}
                    />
                    <p className="">{course.description}</p>
                  </div>
                </AccordionItemPanel>
              ) : (
                <>
                  {course.videos.map((video, index) => (
                    <AccordionItemPanel
                      key={index}
                      onClick={() => {
                        if (videoUrl) {
                          setVideoUrl(video.videoUrl);
                        }
                      }}
                      className={`py-3 cursor-pointer ${
                        videoUrl === video.videoUrl && 'bg-sky-400'
                      }  border-b px-4`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <MdOutlineSlowMotionVideo
                          className=" text-fuchsia-500 cursor-pointer "
                          size={20}
                        />
                        <p
                          className={`${
                            userId && courseName && 'font-semibold'
                          }`}
                        >
                          {video.title}
                        </p>
                      </div>
                    </AccordionItemPanel>
                  ))}
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        'Data Not Found'
      )}
    </>
  );
};

export default CustomAccordion;
