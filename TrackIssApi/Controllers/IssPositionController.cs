using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TrackIssApi.Contract;
using TrackIssApi.IssApi;

namespace TrackIssApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssPositionController : ControllerBase
    {
        // GET api/IssPosition
        [HttpGet]
        public ActionResult<IssLocation> Get()
        {
            return Iss.GetCurrentIssLocation();
        }
    }
}
