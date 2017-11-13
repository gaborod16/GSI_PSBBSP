# coding: utf-8

from __future__ import absolute_import
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class SupportSystemProcess(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, support_system_id: int=None, process_id: int=None, support_system_process_type: str=None):
        """
        SupportSystemProcess - a model defined in Swagger

        :param support_system_id: The support_system_id of this SupportSystemProcess.
        :type support_system_id: int
        :param process_id: The process_id of this SupportSystemProcess.
        :type process_id: int
        :param support_system_process_type: The support_system_process_type of this SupportSystemProcess.
        :type support_system_process_type: str
        """
        self.swagger_types = {
            'support_system_id': int,
            'process_id': int,
            'support_system_process_type': str
        }

        self.attribute_map = {
            'support_system_id': 'support_system_id',
            'process_id': 'process_id',
            'support_system_process_type': 'support_system_process_type'
        }

        self._support_system_id = support_system_id
        self._process_id = process_id
        self._support_system_process_type = support_system_process_type

    @classmethod
    def from_dict(cls, dikt) -> 'SupportSystemProcess':
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The SupportSystemProcess of this SupportSystemProcess.
        :rtype: SupportSystemProcess
        """
        return deserialize_model(dikt, cls)

    @property
    def support_system_id(self) -> int:
        """
        Gets the support_system_id of this SupportSystemProcess.
        Support system identifier

        :return: The support_system_id of this SupportSystemProcess.
        :rtype: int
        """
        return self._support_system_id

    @support_system_id.setter
    def support_system_id(self, support_system_id: int):
        """
        Sets the support_system_id of this SupportSystemProcess.
        Support system identifier

        :param support_system_id: The support_system_id of this SupportSystemProcess.
        :type support_system_id: int
        """

        self._support_system_id = support_system_id

    @property
    def process_id(self) -> int:
        """
        Gets the process_id of this SupportSystemProcess.
        Process identifier

        :return: The process_id of this SupportSystemProcess.
        :rtype: int
        """
        return self._process_id

    @process_id.setter
    def process_id(self, process_id: int):
        """
        Sets the process_id of this SupportSystemProcess.
        Process identifier

        :param process_id: The process_id of this SupportSystemProcess.
        :type process_id: int
        """

        self._process_id = process_id

    @property
    def support_system_process_type(self) -> str:
        """
        Gets the support_system_process_type of this SupportSystemProcess.
        Support system X process type

        :return: The support_system_process_type of this SupportSystemProcess.
        :rtype: str
        """
        return self._support_system_process_type

    @support_system_process_type.setter
    def support_system_process_type(self, support_system_process_type: str):
        """
        Sets the support_system_process_type of this SupportSystemProcess.
        Support system X process type

        :param support_system_process_type: The support_system_process_type of this SupportSystemProcess.
        :type support_system_process_type: str
        """

        self._support_system_process_type = support_system_process_type
