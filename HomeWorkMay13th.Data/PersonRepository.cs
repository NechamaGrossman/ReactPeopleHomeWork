using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HomeWorkMay13th.Data
{
    public class PersonRepository
    {
        string _connectionString;
        public PersonRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.ToList();
            }

        }
        public void AddPerson(Person p)
        {
            using(var context= new PeopleContext(_connectionString))
            {
                context.People.Add(p);
                context.SaveChanges();
            }
        }
        public void DeletePerson(Person p)
        {
            using(var context=new PeopleContext(_connectionString))
            {
                context.People.Remove(p);
                context.SaveChanges();
            }
        }
        public void EditPerson(Person person)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Attach(person);
                context.Entry(person).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}
