import { Test, TestingModule } from '@nestjs/testing';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TagEntity } from './tagEntity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

jest.mock("./tag.service");


describe('TagController', () => {
  let tagcontroller: TagController;
  let tagservice: TagService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
     // imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([TagEntity])],
      controllers: [TagController],
      providers: [TagService]
    }).compile();

    tagservice = module.get<TagService>(TagService);
    tagcontroller = module.get<TagController>(TagController);
  });

  afterEach(() => {
    jest.resetAllMocks();
 });


 describe("* Find One By Id", () => {
  it("should return an entity of tag if successful", async () => {
    const expectedResult = new TagEntity();
    const mockNumberToSatisfyParameters = 0;
    jest.spyOn(tagservice, "findById").mockResolvedValue(expectedResult);
    expect(await tagcontroller.findById(mockNumberToSatisfyParameters)).toBe(expectedResult);
  });

  it("should throw NotFoundException if client not found", async (done) => {
    const expectedResult = undefined;
    const mockNumberToSatisfyParameters = 0;
    jest.spyOn(tagservice, "findById").mockResolvedValue(expectedResult);
    await tagcontroller.findById(mockNumberToSatisfyParameters)
     .then(() => done.fail("Client controller should return NotFoundException error of 404 but did not"))
     .catch((error) => {
       expect(error.status).toBe(404);
       expect(error.message).toBe("Cannot find the requested tag");
       done();
     });
  });

 });

  describe('findAll', () => {

    it('should return an array of tags', async () => {

      const tags: TagEntity[] = [];
      
      const createTag = (id, name) => {
        const tag = new TagEntity();
        tag.id = id;
        tag.tag = name;
        return tag;
      }

      tags.push(createTag(1, 'angularjs'));
      tags.push(createTag(2, 'reactjs'));

      jest.spyOn(tagservice, "findAll").mockResolvedValue(tags);
      expect(await tagcontroller.findAll()).toBe(tags);
      //jest.spyOn(tagservice, "findAll").mockImplementation(() => Promise.resolve(tags));


      //const findAllResult = await tagcontroller.findAll();
      //expect(findAllResult).toBe(tags);

    });

  });



});

