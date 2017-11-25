# coding: utf-8

from __future__ import absolute_import
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from swagger_server.database.database import Base


class Project(Model, Base):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """

    __tablename__ = "project"
    _project_id = Column(Integer, primary_key=True)
    _project_name = Column(String(255), nullable=True)

    _account_id = Column(Integer, ForeignKey('account._account_id'))
    _account_id_team_leader = Column(Integer, ForeignKey('account._account_id'))
    _account_id_secretary = Column(Integer, ForeignKey('account._account_id'))

    def __init__(self, project_id: int=None, project_name: str=None, project_owner_id: int=None, secretary_id: int=None):
        """
        Project - a model defined in Swagger

        :param project_id: The project_id of this Project.
        :type project_id: int
        :param project_name: The project_name of this Project.
        :type project_name: str
        :param project_owner_id: The project_owner_id of this Project.
        :type project_owner_id: int
        :param secretary_id: The secretary_id of this Project.
        :type secretary_id: int
        """
        self.swagger_types = {
            'project_id': int,
            'project_name': str,
            'project_owner_id': int,
            'secretary_id': int
        }

        self.attribute_map = {
            'project_id': 'project_id',
            'project_name': 'project_name',
            'project_owner_id': 'project_owner_id',
            'secretary_id': 'secretary_id'
        }

        self._project_id = project_id
        self._project_name = project_name
        self._account_id_team_leader = project_owner_id
        self._account_id_secretary = secretary_id

    @classmethod
    def from_dict(cls, dikt) -> 'Project':
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Project of this Project.
        :rtype: Project
        """
        return deserialize_model(dikt, cls)

    @property
    def project_id(self) -> int:
        """
        Gets the project_id of this Project.
        Project identifier

        :return: The project_id of this Project.
        :rtype: int
        """
        return self._project_id

    @project_id.setter
    def project_id(self, project_id: int):
        """
        Sets the project_id of this Project.
        Project identifier

        :param project_id: The project_id of this Project.
        :type project_id: int
        """

        self._project_id = project_id

    @property
    def project_name(self) -> str:
        """
        Gets the project_name of this Project.
        Project Name

        :return: The project_name of this Project.
        :rtype: str
        """
        return self._project_name

    @project_name.setter
    def project_name(self, project_name: str):
        """
        Sets the project_name of this Project.
        Project Name

        :param project_name: The project_name of this Project.
        :type project_name: str
        """

        self._project_name = project_name

    @property
    def project_owner_id(self) -> int:
        """
        Gets the project_owner_id of this Project.
        Project owner id

        :return: The project_owner_id of this Project.
        :rtype: int
        """
        return self._account_id_team_leader

    @_account_id_team_leader.setter
    def project_owner_id(self, project_owner_id: int):
        """
        Sets the project_owner_id of this Project.
        Project owner id

        :param project_owner_id: The project_owner_id of this Project.
        :type project_owner_id: int
        """

        self._account_id_team_leader = project_owner_id

    @property
    def secretary_id(self) -> int:
        """
        Gets the secretary_id of this Project.
        Project secretary id

        :return: The secretary_id of this Project.
        :rtype: int
        """
        return self._account_id_secretary

    @_account_id_secretary.setter
    def secretary_id(self, secretary_id: int):
        """
        Sets the secretary_id of this Project.
        Project secretary id

        :param secretary_id: The secretary_id of this Project.
        :type secretary_id: int
        """

        self._account_id_secretary = secretary_id

