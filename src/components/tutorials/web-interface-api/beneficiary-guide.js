import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import Request from './requests/request';
import UpdateBeneficiary from './requests/update-beneficiary';

class BeneficiaryGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Beneficiary API Guide</h1>
            <p>The Beneficiary API allows client applications to do everything from updating demographic information, updating measure data, adding and removing providers and even locking a beneficiary.</p>

            <p>Let's walk through an example of how we might update a beneficiary record:</p>
            <h2 className='ds-h2' id='updating-a-beneficiary'>
              <a
                className='tutorial-header-link'
                href='#updating-a-beneficiary'>
                Updating a Beneficiary
              </a>
            </h2>
            <p>To start, we will want to first retrieve a beneficiary via the GET endpoint.</p>
            <p>You will need both a valid organization <em>id</em> and a <em>beneficiaryId</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/beneficiaries/organization/{id}/beneficiary/{beneficiaryId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Beneficiary Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <Request
              request=""
              response={{
                "data": {
                  "kind": "Beneficiary",
                  "currentItemCount": 25,
                  "itemsPerPage": 25,
                  "startIndex": 50,
                  "totalItems": 200,
                  "items": [
                    {
                      "medicareId": "12345",
                      "firstName": "John",
                      "lastName": "Doe",
                      "gender": "MALE",
                      "dateOfBirth": "1955-11-06T00:00:00.000Z",
                      "mrn": "1111111",
                      "otherId": "111111",
                      "comments": "Some comments here",
                      "skippedReason": "skipped reason",
                      "medicalRecordFound": "NO",
                      "medicalNotQualifiedReason": "IN_HOSPICE",
                      "medicalNotQualifiedDate": "2007-11-06T00:00:00.000Z",
                      "totalProgressCount": 20,
                      "progressCount": 10,
                      "status": "INCOMPLETE",
                      "organizationId": 1,
                      "clinicId": 1,
                      "qualificationComments": "this is qualification comment"
                    }
                  ]
                },
                "apiVersion": "1.0.0"
              }} />

            <br />

            <p>Now that we have the original record, we can call the update endpoint to update whatever fields we need.</p>
            <InlineApiExample
              verb='PUT'
              url='/beneficiaries/organization/{id}/beneficiary/{beneficiaryId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Beneficiary Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Body</td>
                    <td>JSON Representing Beneficiary to Update</td>
                    <td>Request Body</td></tr>
                </tbody>
            } />
            <Request
              request={{
                "medicareId": "12345",
                "firstName": "John",
                "lastName": "Doe",
                "gender": "MALE",
                "dateOfBirth": "1955-11-06T00:00:00.000Z",
                "mrn": "1111111",
                "otherId": "111111",
                "comments": "Some comments here",
                "skippedReason": "skipped reason",
                "medicalRecordFound": "NO",
                "medicalNotQualifiedReason": "IN_HOSPICE",
                "medicalNotQualifiedDate": "2007-11-06T00:00:00.000Z",
                "totalProgressCount": 20,
                "progressCount": 10,
                "status": "INCOMPLETE",
                "organizationId": 1,
                "clinicId": 1,
                "qualificationComments": "this is qualification comment"
              }}

              response={{
                "kind": "Beneficiary",
                "data": {
                  "medicareId": "12345",
                  "firstName": "John",
                  "lastName": "Doe",
                  "gender": "MALE",
                  "dateOfBirth": "1955-11-06T00:00:00.000Z",
                  "mrn": "1111111",
                  "otherId": "111111",
                  "comments": "Some comments here",
                  "skippedReason": "skipped reason",
                  "medicalRecordFound": "NO",
                  "medicalNotQualifiedReason": "IN_HOSPICE",
                  "medicalNotQualifiedDate": "2007-11-06T00:00:00.000Z",
                  "totalProgressCount": 20,
                  "progressCount": 10,
                  "status": "INCOMPLETE",
                  "organizationId": 1,
                  "clinicId": 1,
                  "qualificationComments": "this is qualification comment"
                },
                "apiVersion": "1.0.0"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BeneficiaryGuide;
