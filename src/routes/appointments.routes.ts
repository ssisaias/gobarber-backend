import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticated)

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date); // Transformação

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  return response.json(await appointmentsRepository.find());
});

export default appointmentsRouter;
