using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeWorkMay13th.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HomeWorkMay13th.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route ("getAll")]
        public List<Person> GetPeople()
        {
            var pr = new PersonRepository(_connectionString);
            return pr.GetPeople();

        }
        [Route("Add")]
        public void Add(Person p)
        {
            var pr = new PersonRepository(_connectionString);
            pr.AddPerson(p);
        }
        [Route("Delete")]
        public void Delete(Person p)
        {
            var pr = new PersonRepository(_connectionString);
            pr.DeletePerson(p);
        }
        [Route("Update")]
        public void Update(Person p)
        {
            var pr = new PersonRepository(_connectionString);
            pr.EditPerson(p);
        }
    }
}