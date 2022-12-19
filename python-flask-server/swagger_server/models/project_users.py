# coding: utf-8

from __future__ import absolute_import
from swagger_server.models.project_user import ProjectUser
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class ProjectUsers(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self):
        """
        ProjectUsers - a model defined in Swagger

        """
        self.swagger_types = {
            
        }

        self.attribute_map = {
            
        }


    @classmethod
    def from_dict(cls, dikt) -> 'ProjectUsers':
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ProjectUsers of this ProjectUsers.
        :rtype: ProjectUsers
        """
        return deserialize_model(dikt, cls)