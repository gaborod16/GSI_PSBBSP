# coding: utf-8

from __future__ import absolute_import

from swagger_server.models.account import Account
from swagger_server.models.accounts import Accounts
from swagger_server.models.dataclass import Dataclass
from swagger_server.models.dataclasses import Dataclasses
from swagger_server.models.inline_response200 import InlineResponse200
from swagger_server.models.process import Process
from swagger_server.models.process_dataclass_matrix import ProcessDataclassMatrix
from swagger_server.models.processes import Processes
from swagger_server.models.project import Project
from swagger_server.models.projects import Projects
from swagger_server.models.subsystem import Subsystem
from swagger_server.models.subsystems import Subsystems
from swagger_server.models.support_system import SupportSystem
from swagger_server.models.support_system_dataclass_matrix import SupportSystemDataclassMatrix
from swagger_server.models.support_system_organization_unit_matrix import SupportSystemOrganizationUnitMatrix
from swagger_server.models.support_system_process_matrix import SupportSystemProcessMatrix
from swagger_server.models.support_systems import SupportSystems
from . import BaseTestCase
from six import BytesIO
from flask import json


class TestDefaultController(BaseTestCase):
    """ DefaultController integration test stubs """

    def test_add_user_to_project(self):
        """
        Test case for add_user_to_project

        Add user to project
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/users/{account_id}'.format(project_id=789, account_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_account(self):
        """
        Test case for create_account

        Create new account
        """
        query_string = [('username', 'username_example'),
                        ('email', 'email_example'),
                        ('password', 'password_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/account',
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_dataclass(self):
        """
        Test case for create_dataclass

        Create new dataclass
        """
        query_string = [('name', 'name_example'),
                        ('description', 'description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/dataclasses'.format(project_id=789),
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_organization_unit(self):
        """
        Test case for create_organization_unit

        Create new organization unit
        """
        query_string = [('name', 'name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/organizationunits',
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_process(self):
        """
        Test case for create_process

        Create new process
        """
        query_string = [('name', 'name_example'),
                        ('description', 'description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/processes'.format(project_id=789),
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_process_dataclass_matrix(self):
        """
        Test case for create_process_dataclass_matrix

        Create new process X dataclass matrix
        """
        process_dataclass_matrix = ProcessDataclassMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/processdataclass'.format(project_id=789),
                                    method='POST',
                                    data=json.dumps(process_dataclass_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_projects(self):
        """
        Test case for create_projects

        Create new project
        """
        query_string = [('name', 'name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects',
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_subsystem(self):
        """
        Test case for create_subsystem

        Create new subsystem
        """
        query_string = [('name', 'name_example'),
                        ('description', 'description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/subsytems'.format(project_id=789),
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_support_system(self):
        """
        Test case for create_support_system

        Create new support system
        """
        query_string = [('name', 'name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/supportsystems',
                                    method='POST',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_support_system_dataclass_matrix(self):
        """
        Test case for create_support_system_dataclass_matrix

        Create new support system X dataclass matrix
        """
        support_system_dataclass_matrix = SupportSystemDataclassMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemdataclass'.format(project_id=789),
                                    method='POST',
                                    data=json.dumps(support_system_dataclass_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_support_system_organization_unit_matrix(self):
        """
        Test case for create_support_system_organization_unit_matrix

        Create new support system X organization unit matrix
        """
        support_system_organization_unit_matrix = SupportSystemOrganizationUnitMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemorganizationunit'.format(project_id=789),
                                    method='POST',
                                    data=json.dumps(support_system_organization_unit_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_create_support_system_process_matrix(self):
        """
        Test case for create_support_system_process_matrix

        Create new support system X process matrix
        """
        support_system_process_matrix = SupportSystemProcessMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemprocess'.format(project_id=789),
                                    method='POST',
                                    data=json.dumps(support_system_process_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_account(self):
        """
        Test case for delete_account

        Delete account
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/account/{account_id}'.format(account_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_dataclass(self):
        """
        Test case for delete_dataclass

        Delete dataclass
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/dataclasses/{dataclass_id}'.format(project_id=789, dataclass_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_organization_unit(self):
        """
        Test case for delete_organization_unit

        Delete organization unit
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/organizationunits/{organization_unit_id}'.format(organization_unit_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_process(self):
        """
        Test case for delete_process

        Delete process
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/processes/{process_id}'.format(project_id=789, process_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_process_dataclass_matrix(self):
        """
        Test case for delete_process_dataclass_matrix

        Delete process X dataclass matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/processdataclass'.format(project_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_project(self):
        """
        Test case for delete_project

        Delete project
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}'.format(project_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_subsystem(self):
        """
        Test case for delete_subsystem

        Delete subsystem
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/subsystems/{subsystem_id}'.format(project_id=789, subsystem_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_support_system(self):
        """
        Test case for delete_support_system

        Delete support system
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/supportsystems/{support_system_id}'.format(support_system_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_support_system_dataclass_matrix(self):
        """
        Test case for delete_support_system_dataclass_matrix

        Delete support system X dataclass matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemdataclass'.format(project_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_support_system_organization_unit_matrix(self):
        """
        Test case for delete_support_system_organization_unit_matrix

        Delete support system X organization unit matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemorganizationunit'.format(project_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_delete_support_system_process_matrix(self):
        """
        Test case for delete_support_system_process_matrix

        Delete support system X process matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemprocess'.format(project_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_account(self):
        """
        Test case for get_account

        Get account
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/account/{account_id}'.format(account_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_dataclass(self):
        """
        Test case for get_dataclass

        Get dataclass
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/dataclasses/{dataclass_id}'.format(project_id=789, dataclass_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_organization_unit(self):
        """
        Test case for get_organization_unit

        Get organization unit
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/organizationunits/{organization_unit_id}'.format(organization_unit_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_process(self):
        """
        Test case for get_process

        Get process
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/processes/{process_id}'.format(project_id=789, process_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_process_dataclass_matrix(self):
        """
        Test case for get_process_dataclass_matrix

        Get process X dataclass matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/processdataclass'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_project(self):
        """
        Test case for get_project

        Get project
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_subsystem(self):
        """
        Test case for get_subsystem

        Get subsystem
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/subsystems/{subsystem_id}'.format(project_id=789, subsystem_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_support_system(self):
        """
        Test case for get_support_system

        Get support system
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/supportsystems/{support_system_id}'.format(support_system_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_support_system_dataclass_matrix(self):
        """
        Test case for get_support_system_dataclass_matrix

        Get support system X dataclass matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemdataclass'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_support_system_organization_unit_matrix(self):
        """
        Test case for get_support_system_organization_unit_matrix

        Get support system X organization unit matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemorganizationunit'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_get_support_system_process_matrix(self):
        """
        Test case for get_support_system_process_matrix

        Get support system X process matrix
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemprocess'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_accounts(self):
        """
        Test case for list_accounts

        List accounts
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/account',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_dataclasses(self):
        """
        Test case for list_dataclasses

        List dataclasses
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/dataclasses'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_organization_units(self):
        """
        Test case for list_organization_units

        List organization units
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/organizationunits',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_processes(self):
        """
        Test case for list_processes

        List processes
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/processes'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_projects(self):
        """
        Test case for list_projects

        List projects
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_subsystems(self):
        """
        Test case for list_subsystems

        List subsystems
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/subsytems'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_support_systems(self):
        """
        Test case for list_support_systems

        List support systems
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/supportsystems',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_list_users_in_project(self):
        """
        Test case for list_users_in_project

        List users in project
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/users'.format(project_id=789),
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_login(self):
        """
        Test case for login

        User authentication
        """
        query_string = [('email', 'email_example'),
                        ('password', 'password_example')]
        response = self.client.open('/login',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_logout(self):
        """
        Test case for logout

        User logs out
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/logout',
                                    method='GET',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_remove_user_from_project(self):
        """
        Test case for remove_user_from_project

        Remove user from project
        """
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/users/{account_id}'.format(project_id=789, account_id=789),
                                    method='DELETE',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_account(self):
        """
        Test case for update_account

        Update account
        """
        query_string = [('account_username', 'account_username_example'),
                        ('email', 'email_example'),
                        ('account_password', 'account_password_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/account/{account_id}'.format(account_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_dataclass(self):
        """
        Test case for update_dataclass

        Update dataclass
        """
        query_string = [('dataclass_name', 'dataclass_name_example'),
                        ('dataclass_description', 'dataclass_description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/dataclasses/{dataclass_id}'.format(project_id=789, dataclass_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_organization_unit(self):
        """
        Test case for update_organization_unit

        Update organization unit
        """
        query_string = [('support_system_name', 'support_system_name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/organizationunits/{organization_unit_id}'.format(organization_unit_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_process(self):
        """
        Test case for update_process

        Update process
        """
        query_string = [('dataclass_name', 'dataclass_name_example'),
                        ('dataclass_description', 'dataclass_description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/processes/{process_id}'.format(project_id=789, process_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_process_dataclass_matrix(self):
        """
        Test case for update_process_dataclass_matrix

        Update process X dataclass matrix
        """
        process_dataclass_matrix = ProcessDataclassMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/processdataclass'.format(project_id=789),
                                    method='PUT',
                                    data=json.dumps(process_dataclass_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_project(self):
        """
        Test case for update_project

        Update project
        """
        query_string = [('project_name', 'project_name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}'.format(project_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_subsystem(self):
        """
        Test case for update_subsystem

        Update subsystem
        """
        query_string = [('subsystem_name', 'subsystem_name_example'),
                        ('subsystem_description', 'subsystem_description_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/subsystems/{subsystem_id}'.format(project_id=789, subsystem_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_support_system(self):
        """
        Test case for update_support_system

        Update support system
        """
        query_string = [('support_system_name', 'support_system_name_example'),
                        ('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/supportsystems/{support_system_id}'.format(support_system_id=789),
                                    method='PUT',
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_support_system_dataclass_matrix(self):
        """
        Test case for update_support_system_dataclass_matrix

        Update support system X dataclass matrix
        """
        support_system_dataclass_matrix = SupportSystemDataclassMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemdataclass'.format(project_id=789),
                                    method='PUT',
                                    data=json.dumps(support_system_dataclass_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_support_system_organization_unit_matrix(self):
        """
        Test case for update_support_system_organization_unit_matrix

        Update support system X organization unit matrix
        """
        support_system_organization_unit_matrix = SupportSystemOrganizationUnitMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemorganizationunit'.format(project_id=789),
                                    method='PUT',
                                    data=json.dumps(support_system_organization_unit_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))

    def test_update_support_system_process_matrix(self):
        """
        Test case for update_support_system_process_matrix

        Update support system X process matrix
        """
        support_system_process_matrix = SupportSystemProcessMatrix()
        query_string = [('account_id_session', 789),
                        ('token', 'token_example')]
        response = self.client.open('/projects/{project_id}/matrices/supportsystemprocess'.format(project_id=789),
                                    method='PUT',
                                    data=json.dumps(support_system_process_matrix),
                                    content_type='application/json',
                                    query_string=query_string)
        self.assert200(response, "Response body is : " + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
