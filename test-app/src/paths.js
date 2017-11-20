export const GO_BACK = "../";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/invite";
export const ORGANIZATION_UNITS = "/organization_units";
export const SUPPORT_SYSTEMS = "/support_systems";
export const NEW_PROJECT = "/create_project";
export const EDIT_PROJECT = "/project/:proj_id/edit";
export const VIEW_PROJECT = "/project/:proj_id";
export const NEW_PROCESS = "/project/:proj_id/create_process";
export const SHOW_MATRICES = "/project/:proj_id/show_matrices";
export const NEW_DATA_CLASS = "/project/:proj_id/create_data_class";
export const VIEW_SUBSYSTEM = "/project/:proj_id/subsystem/:subs_id";
export const PROBLEMS_SOLUTIONS = "/project/:proj_id/solutions";

export const genEditProjectPath = ({proj_id}) => (
	"/project/" + proj_id + "/edit"
)

export const genViewProjectPath = ({proj_id}) => (
	"/project/" + proj_id
)

export const genNewProcessPath = ({proj_id}) => (
	"/project/" + proj_id + "/create_process"
)

export const genNewDataClassPath = ({proj_id}) => (
	"/project/" + proj_id + "/create_data_class"
)

export const genShowMatricesPath = ({proj_id}) => (
	"/project/" + proj_id + "/show_matrices"
)

export const genViewSubsystemPath = ({proj_id, subs_id}) => (
	"/project/" + proj_id + "/subsystem/" + subs_id
)

export const genProblemsSolutionsPath = ({proj_id}) => (
	"/project/" + proj_id + "/solutions"
)