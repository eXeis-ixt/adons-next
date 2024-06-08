import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Drawer,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import programming from "../assets/programming.svg";

export function Hero() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <section className="flex justify-center">
      <div className="w-[32rem] mt-20 container">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Web Design and Development and solutions
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                We are the craftsmen behind captivating and responsive websites
                that not only look visually appealing but also perform
                seamlessly. Whether you need a user-friendly e-commerce
                platform, a sleek corporate website, or a customized web
                application, our team of experienced developers is here to bring
                your vision to life.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Graphic Design and solutions
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                Visuals speak louder than words, and at Adons, we specialize in
                crafting visual identities that leave a lasting impression. Our
                talented graphic designers are skilled in creating logos,
                branding materials, infographics, and other design elements that
                resonate with your audience and reinforce your brand's
                personality.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Video editing and solutions
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                At Adons, we don't just stop at web development, graphics
                design, and digital marketing. We also specialize in the art of
                video editing, where we transform raw footage into compelling
                visual narratives that captivate and engage your audience. Video
                editing is a crucial component of our comprehensive digital
                services, allowing us to add a dynamic dimension to your online
                presence.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Digital Marketing
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                In the digital age, visibility is key to success. Our digital
                marketing experts are here to boost your online presence through
                strategic SEO, engaging content marketing, social media
                management, and pay-per-click advertising. We tailor our
                strategies to your unique business goals to drive traffic,
                conversions, and growth.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
        <div>
          <React.Fragment>
            <Button onClick={openDrawer} className="mt-5">
              Learn more!
            </Button>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Adons Techonology
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <Typography color="gray" className="mb-8 pr-4 font-normal">
                Welcome to Adons, your one-stop destination for all your
                creative needs! We specialize in Graphic Design, Web Design,
                Digital Marketing, Video Editing, and more. With over 8 years of
                expertise, our skilled team of graphic designers ensures
                stunning visuals that captivate your audience. Our web
                designers, with 5 years of experience, craft intuitive and
                visually appealing websites that leave a lasting impression. Our
                digital marketers, backed by 10 years of proficiency, implement
                strategies that drive growth and maximize your online presence.
                And our video editors, with 7 years of skillful editing, bring
                your footage to life with seamless transitions and captivating
                storytelling. Trust Adons for exceptional services and let us
                elevate your brand to new heights.
              </Typography>
              <div className="flex gap-2">
                <Button size="sm">Get Started</Button>
                <Button size="sm" variant="outlined">
                  Documentation
                </Button>
              </div>
            </Drawer>
          </React.Fragment>
        </div>
      </div>

      <div className=" mt-5 flex justify-center">
        <Image src={programming} className=" w-9/12 h-auto  ml-4" />
      </div>
    </section>
  );
}

export default Hero;
