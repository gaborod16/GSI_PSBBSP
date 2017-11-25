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

    _account_id_team_leader = Column(Integer, ForeignKey('account._account_id'))
    _account_id_secretary = Column(Integer, ForeignKey('account._account_id'))

    #_team_leader = relationship("Account", backref="" back_populates="_project_team_leader", foreign_keys=[_account_id_team_leader])
    #_team_leader = relationship("Account", back_populates="_project_secretary", foreign_keys=[_account_id_secretary])
    _team_leader = relationship("Account", uselist=False, foreign_keys=[_account_id_team_leader])
    _team_leader = relationship("Account", uselist=False, foreign_keys=[_account_id_secretary])
    #_team_leader = relationship("Account", uselist=False, foreign_keys=[_account_id_team_leader])
    #_secretary = relationship("Account", uselist=False, foreign_keys=[_account_id_secretary])

    _accounts = relationship("Account", secondary="project_user", backref="_projects")

    def __init__(self, project_id: int=None, project_name: str=None, account_id_team_leader: int=None, account_id_secretary: int=None):
        """
        Project - a model defined in Swagger

        :param project_id: The project_id of this Project.
        :type project_id: int
        :param project_name: The project_name of this Project.
        :type project_name: str
        :param account_id_team_leader: The account_id_team_leader of this Project.
        :type account_id_team_leader: int
        :param account_id_secretary: The account_id_secretary of this Project.
        :type account_id_secretary: int
        """
        self.swagger_types = {
            'project_id': int,
            'project_name': str,
            'account_id_team_leader': int,
            'account_id_secretary': int
        }

        self.attribute_map = {
            'project_id': 'project_id',
            'project_name': 'project_name',
            'account_id_team_leader': 'account_id_team_leader',
            'account_id_secretary': 'account_id_secretary'
        }

        self._project_id = project_id
        self._project_name = project_name
        self._account_id_team_leader = account_id_team_leader
        self._account_id_secretary = account_id_secretary

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
    def account_id_team_leader(self) -> int:
        """
        Gets the account_id_team_leader of this Project.
        Project team leader id

        :return: The account_id_team_leader of this Project.
        :rtype: int
        """
        return self._account_id_team_leader

    @account_id_team_leader.setter
    def account_id_team_leader(self, account_id_team_leader: int):
        """
        Sets the account_id_team_leader of this Project.
        Project team leader id

        :param account_id_team_leader: The account_id_team_leader of this Project.
        :type account_id_team_leader: int
        """

        self._account_id_team_leader = account_id_team_leader

    @property
    def account_id_secretary(self) -> int:
        """
        Gets the account_id_secretary of this Project.
        Project secretary id

        :return: The account_id_secretary of this Project.
        :rtype: int
        """
        return self._account_id_secretary

    @account_id_secretary.setter
    def account_id_secretary(self, account_id_secretary: int):
        """
        Sets the account_id_secretary of this Project.
        Project secretary id

        :param account_id_secretary: The account_id_secretary of this Project.
        :type account_id_secretary: int
        """

        self._account_id_secretary = account_id_secretary

    @property
    def accounts(self):
        return self._accounts

    @accounts.setter
    def accounts(self, accounts):
        self._accounts = accounts

