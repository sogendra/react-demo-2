import { Field, Form, Formik } from "formik";

const ProjectForm = ({ project, handleSubmit, btnText }) => {
  console.log("ProjectForm", project);
  return (
    <Formik initialValues={project} onSubmit={handleSubmit} enableReinitialize>
      {() => {
        return (
          <Form>
            <Field type="text" name="projectName" placeholder="Project Name" />
            <Field type="text" name="client" placeholder="Client Name" />
            <Field type="text" name="totalHours" placeholder="Total Hours" />
            <Field type="text" name="engineers" placeholder="No. of Engineers" />
            <Field type="text" name="teamLeads" placeholder="No. of Team Leads" />
            <Field type="text" name="pm" placeholder="Project Manager" />
            <Field type="text" name="budget" placeholder="Budget" />
            <button type="submit">{btnText}</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProjectForm;
