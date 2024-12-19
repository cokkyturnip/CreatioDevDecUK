create or alter view MiiVwContactAgeDays
as
select Id as MiiId, Name as MiiName, BirthDate as MiiBirthDate,
datediff(day, BirthDate, getdate()) as MiiAgeDays
from Contact