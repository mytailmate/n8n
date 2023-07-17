import type { INodeProperties } from 'n8n-workflow';

import {
	currencies,
	mailingAddress,
	makeCustomFieldsFixedCollection,
	makeGetAllFields,
	otherAddress,
} from './SharedFields';

export const ticketOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a ticket',
				action: 'Create a ticket',
			},
			{
				name: 'Create or Update',
				value: 'upsert',
				description: 'Create a new record, or update the current one if it already exists (upsert)',
				action: 'Create or Update a ticket',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a ticket',
				action: 'Delete a ticket',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a ticket',
				action: 'Get a ticket',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search a ticket',
				action: 'Search a ticket',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many tickets',
				action: 'Get many tickets',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a ticket',
				action: 'Update a ticket',
			},
		],
		default: 'create',
	},
];

export const ticketFields: INodeProperties[] = [
	// ----------------------------------------
	//             contact: create
	// ----------------------------------------
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Department Id',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Contact Id',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Assistant',
				name: 'Assistant',
				type: 'string',
				default: '',
				description: 'Name of the contact’s assistant',
			},
			makeCustomFieldsFixedCollection('ticket'),
			{
				displayName: 'Date of Birth',
				name: 'Date_of_Birth',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Department',
				name: 'Department',
				type: 'string',
				default: '',
				description: 'Company department to which the contact belongs',
			},
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Primary)',
				name: 'Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Secondary)',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			mailingAddress,
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			otherAddress,
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone (Assistant)',
				name: 'Asst_Phone',
				type: 'string',
				default: '',
				description: 'Phone number of the contact’s assistant',
			},
			{
				displayName: 'Phone (Home)',
				name: 'Home_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone (Other)',
				name: 'Other_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Title',
				name: 'Title',
				type: 'string',
				default: '',
				description: 'Position of the contact at their company',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//           contact: upsert
	// ----------------------------------------
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Department Id',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Contact Id',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: false,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['upsert'],
			},
		},
		options: [
			{
				displayName: 'Assistant',
				name: 'Assistant',
				type: 'string',
				default: '',
				description: 'Name of the contact’s assistant',
			},
			makeCustomFieldsFixedCollection('ticket'),
			{
				displayName: 'Date of Birth',
				name: 'Date_of_Birth',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Department',
				name: 'Department',
				type: 'string',
				default: '',
				description: 'Company department to which the contact belongs',
			},
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Primary)',
				name: 'Email',
				type: 'string',
				default: '',
				description:
					'Email of the contact. If a record with this email exists it will be updated, otherwise a new one will be created.',
			},
			{
				displayName: 'Email (Secondary)',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			mailingAddress,
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			otherAddress,
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone (Assistant)',
				name: 'Asst_Phone',
				type: 'string',
				default: '',
				description: 'Phone number of the contact’s assistant',
			},
			{
				displayName: 'Phone (Home)',
				name: 'Home_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone (Other)',
				name: 'Other_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Title',
				name: 'Title',
				type: 'string',
				default: '',
				description: 'Position of the contact at their company',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//             contact: delete
	// ----------------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'ID of the contact to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['delete'],
			},
		},
	},

	// ----------------------------------------
	//               contact: get
	// ----------------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'ID of the contact to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------------
	//               contact: search
	// ----------------------------------------
	{
		displayName: 'Phone',
		name: 'phone',
		description: 'Phone of the contact to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['search'],
			},
		},
	},

	// ----------------------------------------
	//             contact: getAll
	// ----------------------------------------
	...makeGetAllFields('contact'),

	// ----------------------------------------
	//             contact: update
	// ----------------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'ID of the contact to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Assistant',
				name: 'Assistant',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Assistant’s Phone',
				name: 'Asst_Phone',
				type: 'string',
				default: '',
				description: 'Phone number of the contact’s assistant',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'options',
				default: 'USD',
				description: 'Symbol of the currency in which revenue is generated',
				options: currencies,
			},
			makeCustomFieldsFixedCollection('contact'),
			{
				displayName: 'Date of Birth',
				name: 'Date_of_Birth',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Department',
				name: 'Department',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Primary)',
				name: 'Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Secondary)',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Home Phone',
				name: 'Home_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'Last_Name',
				type: 'string',
				default: '',
			},
			mailingAddress,
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			otherAddress,
			{
				displayName: 'Other Phone',
				name: 'Other_Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Title',
				name: 'Title',
				type: 'string',
				default: '',
				description: 'Position of the contact at their company',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
		],
	},
];
