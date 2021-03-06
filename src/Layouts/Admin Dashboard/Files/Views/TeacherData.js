import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { CDBBtn, CDBContainer } from "cdbreact";
import { getTeachers, getTeacher, updateTeacher } from "../Apis/apiForTeachers"

function TeacherDataForAdmin() {
    const [items, setItems] = useState([])

    const statusHandler =  async function(id) {
        const data = await getTeacher(id)
        data.status = "1"
        await updateTeacher(data, id)

    }

    useEffect(() => {
      const fetchItems = async function() {
        const teachers = await getTeachers()
        setItems(teachers)
      }
      fetchItems()
    })
    return (
        <>
        <div className="container-fluid"> 
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Teachers</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Teachers List</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Gender</th>
                              <th>Date of Birth</th>
                              <th>Email</th>
                              <th>Country Code</th>
                              <th>Phone</th>
                              <th>Nationality</th>
                              <th>Current Location</th>
                              <th>Description</th>
                              <th>Curriculum Vitae</th>
                              <th>Image</th>
                              <th>Video</th>
                              <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(teachers => (
                                <tr key={teachers._id}>
                                <td>
                                    {teachers.name}
                                </td>
                                <td>
                                    {teachers.gender}
                                </td>
                                <td>
                                    {teachers.dob}
                                </td>
                                <td>
                                    {teachers.email}
                                </td>
                                <td>
                                    {teachers.country_code}
                                </td>
                                <td>
                                    {teachers.phone}
                                </td>
                                <td>
                                    {teachers.nationality}
                                </td>
                                <td>
                                    {teachers.country}
                                </td>
                                <td>
                                    {teachers.description}
                                </td>
                                <td>
                                    {teachers.cv}
                                </td>
                                <td>
                                    {teachers.image}
                                </td>
                                <td>
                                    {teachers.video}
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">View Blog</button>
                                </td>
                                {/*<td>
                                <button className="btn btn-outline-success" onClick={() => testingHandler(`${blogs._id}`)}>Approve Blog</button>
                                </td>
                                */}
                                <td>
                                <button className="btn btn-outline-success" onClick={() => statusHandler(`${teachers._id}`)}>Approve Blog</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" >Delete Blog</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
    </>
    )
}

export default TeacherDataForAdmin
