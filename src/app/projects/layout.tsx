import Header from "@/components/Header";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProjectsLayout;
