import { Separator } from "@/components/ui/separator"
import WorkExperienceForm from "./work-experience"

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Work Experience</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <WorkExperienceForm />
    </div>
  )
}