import {List} from '../app/common/models/list.model';

export const ListsMock: Array<List> =
  [
    {
      _id: '5ebfc71ace85c5392b2a7a26',
      details: {title: 'List one', description: null},
      items: [{
        _id: '5ebfc71ace85c5392b2a7a22',
        details: {title: 'Item 1', description: 'This is the first item'},
        category: 'other',
        status: 'done',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc71ace85c5392b2a7a23',
        details: {title: 'Item 2', description: 'This is the second item'},
        category: 'category 2',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc71ace85c5392b2a7a24',
        details: {title: 'Item 3', description: 'This is the third item'},
        category: 'something else',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc71ace85c5392b2a7a28',
        details: {title: 'Item 3', description: 'This is the third item'},
        category: 'something else',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc71ace85c5392b2a7a27',
        details: {title: 'Item 3', description: 'This is the third item'},
        category: 'something else',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc71ace85c5392b2a7a26',
        details: {title: 'Item 3', description: 'This is the third item'},
        category: 'something else',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }],
      users: [{
        _id: '5ebfc71ace85c5392b2a7a25',
        username: 'admin',
        role: 'admin',
        _createdAt: 'Sat May 16 2020 12:57:30 GMT+0200 (South Africa Standard Time)'
      }]
    },
    {
      _id: '5ebfc7b0ce85c5392b2a7a2b',
      details: {title: 'List two', description: 'this is a second list'},
      items: [{
        _id: '5ebfc7b0ce85c5392b2a7a27',
        details: {title: 'Item 1', description: 'This is the first item'},
        category: 'category 1',
        _createdAt: 'Sat May 16 2020 13:00:00 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc7b0ce85c5392b2a7a28',
        details: {title: 'Item 2', description: 'This is the second item'},
        category: 'category 2',
        _createdAt: 'Sat May 16 2020 13:00:00 GMT+0200 (South Africa Standard Time)'
      }, {
        _id: '5ebfc7b0ce85c5392b2a7a29',
        details: {title: 'Item 3', description: 'This is the third item'},
        category: 'category 3',
        _createdAt: 'Sat May 16 2020 13:00:00 GMT+0200 (South Africa Standard Time)'
      }],
      users: [{
        _id: '5ebfc7b0ce85c5392b2a7a2a',
        username: 'admin',
        role: 'admin',
        _createdAt: 'Sat May 16 2020 13:00:00 GMT+0200 (South Africa Standard Time)'
      }]
    },
    {
      _id: '5ec441ab77791a2370b104a4',
      details: {title: 'List three', description: 'This is a list'},
      users: [{
        _id: '5ebfc7b0ce85c5392b2a7a2a',
        username: 'admin',
        role: 'admin',
        _createdAt: 'Sat May 16 2020 13:00:00 GMT+0200 (South Africa Standard Time)'
      }]
    }
  ];
