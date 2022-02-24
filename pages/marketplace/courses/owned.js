import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { Message, OwnedCourseCard } from "@components/ui/course";
import { Button } from "@components/ui/common";

export default function OwnedCourses() {
  return (
    <>
      <div className="py-4">
        <MarketHeader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message type="warning">My custom message!</Message>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </>
  );
}

OwnedCourses.Layout = BaseLayout;
