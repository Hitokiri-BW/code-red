import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BarChart3 } from "lucide-react"

export interface CourseData {
  title: string
  description: string
  image: string
  category: string
  level: string
  duration: string
  students: string
  lessons: number
}

export function CourseCard({ course }: { course: CourseData }) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.image}
          alt={`${course.title} course thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <Badge className="bg-primary text-primary-foreground">{course.category}</Badge>
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {course.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BarChart3 className="h-3.5 w-3.5" />
            {course.level}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            {course.students}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
