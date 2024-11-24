import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description:
    'Showcasing my foundational skills in frontend development, the tools I’ve learned, the technologies I’m passionate about, and my journey as a fresher in the field.',
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Building My Frontend Foundations"
      intro="Showcasing my foundational skills in frontend development, the tools I’ve learned, the technologies I’m passionate about, and my journey as a fresher in the field."
    >
      <div className="space-y-20">
        <ToolsSection
          title="JavaScript Frameworks / Libraries
"
        >
          <Tool title="React JS">
            A popular JavaScript library for building user interfaces.
            Experienced in creating responsive and interactive frontends for web
            applications, leveraging React's component-based architecture to
            enhance maintainability and scalability.
          </Tool>
          <Tool title="Next JS">
            A React framework optimized for server-side rendering and static
            site generation. Proficient in using Next.js to build dynamic,
            SEO-friendly web applications, including developing APIs for backend
            integration and handling server-side rendering.
          </Tool>
          <Tool title="Astro">
            A modern static site generator designed for performance and
            simplicity. Applied Astro to develop lightweight and fast-loading
            websites, focusing on efficient handling of static content.
          </Tool>
        </ToolsSection>
        <ToolsSection title="CSS Frameworks and Styling">
          <Tool title="Tailwind CSS">
            Experienced in using Tailwind CSS to rapidly build modern,
            responsive, and aesthetically pleasing user interfaces. Leveraged
            its utility-first design approach to streamline styling in web
            development projects.
          </Tool>
          <Tool title="Responsive Design">
            Proficient in creating websites and applications that provide
            seamless user experiences across devices, using techniques like
            media queries, fluid grids, and flexible layouts. Focused on
            ensuring optimal performance and accessibility on mobile, tablet,
            and desktop.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="JavaScript">
            Advanced proficiency in JavaScript, with expertise in developing
            dynamic, feature-rich web applications. Experienced in using ES6+
            features to write clean, efficient, and modular code.
          </Tool>
          <Tool title="TypeScript">
            Skilled in TypeScript for building type-safe applications, improving
            code maintainability, and reducing runtime errors in JavaScript
            projects.{' '}
          </Tool>
          <Tool title="HTML">
            Comprehensive knowledge of semantic HTML to structure web content
            for maximum accessibility and SEO optimization.{' '}
          </Tool>
          <Tool title="CSS">
            Expertise in styling web applications using modern CSS techniques,
            including Flexbox, Grid, and animations, to create visually
            appealing designs.{' '}
          </Tool>
          <Tool title="Java">
            Familiar with Java for developing backend services, object-oriented
            programming, and cross-platform applications.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Version Control
"
        >
          <Tool title="Git">
            Proficient in version control using Git, including branching,
            merging, and resolving conflicts. Experienced in managing
            collaborative development processes with Git workflows.
          </Tool>
          <Tool title="GitHub">
            Skilled in utilizing GitHub for version control, code reviews, and
            team collaboration. Familiar with creating and managing
            repositories, pull requests, and CI/CD workflows.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud Platforms">
          <Tool title="AWS">
            Hands-on experience with a wide range of AWS services, including S3,
            IAM, Elastic Beanstalk, Amplify, CloudWatch, and Logs. Proficient in
            deploying scalable web applications, managing access control and
            permissions, and monitoring application performance. Skilled in
            leveraging Elastic Beanstalk for streamlined deployments and Amplify
            for rapid front-end hosting and integrations.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Bot Development
"
        >
          <Tool title="Botpress">
            Experienced in building conversational bots using Botpress to
            enhance customer engagement. Utilized Botpress's modular
            architecture for creating custom workflows and integrations.{' '}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
