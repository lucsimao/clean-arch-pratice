import { CreateOrderRepository } from '../../../__protocols__/CreateOrderRepository';

import {
  CreateOrder,
  CreateOrderInput,
} from '../../../../enterprise-business-rules/__protocols__/CreateProcess';
import { Status } from '../../../../enterprise-business-rules/entities/Order';
import { CreateOrderControllerInput } from '../../../../interface-adapters/controllers/CreateOrderController';
import {
  CreateOrderUseCaseInput,
  CreateOrderUseCaseOutput,
} from '../../CreateOrderUseCase';

import { GetOrderRepository } from '../../../__protocols__/GetOrderRepository';
import {
  GetOrder,
  GetOrderInput,
  GetOrderOutput,
} from '../../../../enterprise-business-rules/__protocols__/GetProcess';
import { GetOrderUseCaseOutput } from '../../GetOrderUseCase';
import { GetOrderControllerOutput } from '../../../../interface-adapters/controllers/GetOrderController';

export const makeCreateOrderControllerInput =
  (): CreateOrderControllerInput => ({
    id: 1,
    items: [],
    restaurantId: '2',
    status: Status.IN_PROGRESS,
    table: 3,
  });

export const makeGetOrderControllerOutput = (): GetOrderControllerOutput => [
  makeFakeCreateOrderList(),
];

export const makeCreateOrderStub = (): jest.Mocked<CreateOrder> => ({
  execute: jest.fn().mockResolvedValue(undefined),
});

export const makeGetOrderStub = (): jest.Mocked<GetOrder> => ({
  getAllOrder: jest.fn().mockResolvedValue(makeFakeCreateOrderList()),
  getOrderById: jest.fn().mockResolvedValue(makeFakeCreateOrderUseCaseInput()),
});
export const makeFakeCreateOrderUseCaseOutput =
  (): jest.Mocked<CreateOrderUseCaseOutput> => {
    return undefined;
  };

export const makeCreateOrderRepositoryStub =
  (): jest.Mocked<CreateOrderRepository> => ({
    create: jest.fn().mockResolvedValue(makeFakeCreateOrderUseCaseOutput()),
  });

export const makeFakeCreateOrderUseCaseInput = (
  payload?: Partial<CreateOrderUseCaseInput>
): jest.Mocked<CreateOrderUseCaseInput> => ({
  id: 1,
  items: [],
  restaurantId: 'Pizzaria torre de Pizza',
  status: Status.IN_PROGRESS,
  table: 4,
  ...payload,
});

export const makeFakeCreateOrder = (
  payload?: Partial<CreateOrder>
): jest.Mocked<CreateOrderInput> => ({
  id: 1,
  items: [],
  restaurantId: 'Pizzaria torre de Pizza',
  status: Status.IN_PROGRESS,
  table: 4,
  ...payload,
});

export const makeFakeCreateOrderList = (): any => [
  makeFakeCreateOrder(),
  makeFakeCreateOrder(),
];

export const makeGetOrderRepositoryStub =
  (): jest.Mocked<GetOrderRepository> => ({
    getAll: jest.fn().mockResolvedValue(makeFakeCreateOrderList()),
    getById: jest.fn().mockResolvedValue(makeCreateOrder()),
  });

export const makeCreateOrderUserStub =
  (): jest.Mocked<CreateOrderRepository> => ({
    create: jest.fn().mockResolvedValue(makeFakeCreateOrderUseCaseInput()),
  });

export const makeCreateOrder = (): jest.Mocked<CreateOrder> => ({
  execute: jest.fn().mockResolvedValue(makeFakeCreateOrder()),
});
