import type { Metadata } from "next"
import { CourseCard } from "@/components/courses/course-card"
import type { CourseData } from "@/components/courses/course-card"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse our collection of free online courses in web development, data science, design, and more.",
}

const courses: CourseData[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications from scratch.",
    image: "/images/course-web-dev.jpg",
    category: "Development",
    level: "Beginner",
    duration: "12 weeks",
    students: "12.4K",
    lessons: 48,
  },
  {
    title: "Data Science Fundamentals",
    description:
      "Learn statistics, Python, and machine learning to analyze data and build predictive models.",
    image: "/images/course-data-science.jpg",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    students: "8.7K",
    lessons: 36,
  },
  {
    title: "UI/UX Design Principles",
    description:
      "Discover user-centered design, wireframing, prototyping, and usability testing techniques.",
    image: "/images/course-design.jpg",
    category: "Design",
    level: "Beginner",
    duration: "8 weeks",
    students: "6.2K",
    lessons: 28,
  },
  {
    title: "Python Programming",
    description:
      "From variables to advanced OOP concepts, build a strong Python foundation for any career path.",
    image: "/images/course-python.jpg",
    category: "Development",
    level: "Beginner",
    duration: "6 weeks",
    students: "15.1K",
    lessons: 32,
  },
  {
    title: "Digital Marketing Mastery",
    description:
      "Learn SEO, social media marketing, content strategy, and analytics to grow any brand online.",
    image: "/images/course-marketing.jpg",
    category: "Marketing",
    level: "Beginner",
    duration: "8 weeks",
    students: "4.9K",
    lessons: 24,
  },
  {
    title: "Business & Entrepreneurship",
    description:
      "Develop essential business skills including strategy, finance, leadership, and startup fundamentals.",
    image: "/images/course-business.jpg",
    category: "Business",
    level: "Intermediate",
    duration: "10 weeks",
    students: "3.8K",
    lessons: 30,
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-background">
      {/* Page header */}
      <section className="border-b border-border bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Explore Our Courses
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover free, high-quality courses designed by industry experts to
            help you build real-world skills.
          </p>
        </div>
      </section>

      {/* Course grid */}
      <section className="py-16 md:py-20" aria-labelledby="courses-grid-heading">
        <h2 id="courses-grid-heading" className="sr-only">
          Available courses
        </h2>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
