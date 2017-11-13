# coding: utf-8

from __future__ import absolute_import
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class SupportSystemOrganizationUnit(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, support_system_id: int=None, organization_unit_id: int=None, support_system_organization_unit_type: str=None):
        """
        SupportSystemOrganizationUnit - a model defined in Swagger

        :param support_system_id: The support_system_id of this SupportSystemOrganizationUnit.
        :type support_system_id: int
        :param organization_unit_id: The organization_unit_id of this SupportSystemOrganizationUnit.
        :type organization_unit_id: int
        :param support_system_organization_unit_type: The support_system_organization_unit_type of this SupportSystemOrganizationUnit.
        :type support_system_organization_unit_type: str
        """
        self.swagger_types = {
            'support_system_id': int,
            'organization_unit_id': int,
            'support_system_organization_unit_type': str
        }

        self.attribute_map = {
            'support_system_id': 'support_system_id',
            'organization_unit_id': 'organization_unit_id',
            'support_system_organization_unit_type': 'support_system_organization_unit_type'
        }

        self._support_system_id = support_system_id
        self._organization_unit_id = organization_unit_id
        self._support_system_organization_unit_type = support_system_organization_unit_type

    @classmethod
    def from_dict(cls, dikt) -> 'SupportSystemOrganizationUnit':
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The SupportSystemOrganizationUnit of this SupportSystemOrganizationUnit.
        :rtype: SupportSystemOrganizationUnit
        """
        return deserialize_model(dikt, cls)

    @property
    def support_system_id(self) -> int:
        """
        Gets the support_system_id of this SupportSystemOrganizationUnit.
        Support system identifier

        :return: The support_system_id of this SupportSystemOrganizationUnit.
        :rtype: int
        """
        return self._support_system_id

    @support_system_id.setter
    def support_system_id(self, support_system_id: int):
        """
        Sets the support_system_id of this SupportSystemOrganizationUnit.
        Support system identifier

        :param support_system_id: The support_system_id of this SupportSystemOrganizationUnit.
        :type support_system_id: int
        """

        self._support_system_id = support_system_id

    @property
    def organization_unit_id(self) -> int:
        """
        Gets the organization_unit_id of this SupportSystemOrganizationUnit.
        Organization unit identifier

        :return: The organization_unit_id of this SupportSystemOrganizationUnit.
        :rtype: int
        """
        return self._organization_unit_id

    @organization_unit_id.setter
    def organization_unit_id(self, organization_unit_id: int):
        """
        Sets the organization_unit_id of this SupportSystemOrganizationUnit.
        Organization unit identifier

        :param organization_unit_id: The organization_unit_id of this SupportSystemOrganizationUnit.
        :type organization_unit_id: int
        """

        self._organization_unit_id = organization_unit_id

    @property
    def support_system_organization_unit_type(self) -> str:
        """
        Gets the support_system_organization_unit_type of this SupportSystemOrganizationUnit.
        Process X dataclass type

        :return: The support_system_organization_unit_type of this SupportSystemOrganizationUnit.
        :rtype: str
        """
        return self._support_system_organization_unit_type

    @support_system_organization_unit_type.setter
    def support_system_organization_unit_type(self, support_system_organization_unit_type: str):
        """
        Sets the support_system_organization_unit_type of this SupportSystemOrganizationUnit.
        Process X dataclass type

        :param support_system_organization_unit_type: The support_system_organization_unit_type of this SupportSystemOrganizationUnit.
        :type support_system_organization_unit_type: str
        """

        self._support_system_organization_unit_type = support_system_organization_unit_type
