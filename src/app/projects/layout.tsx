import Header from "@/components/Header";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Header />
            {children}
        </div>
    );
};

export default ProjectsLayout;