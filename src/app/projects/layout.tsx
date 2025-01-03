import Header from '@/components/header'

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default ProjectsLayout
